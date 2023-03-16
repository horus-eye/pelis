import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';


export const Listado = ({ listadoState, setListadoState }) => {

    const [editar, setEditar] = useState(0);

    //const [listadoState, setListadoState] = useState([]);

    //siempre poner los estados antes de los efectos

    useEffect(() => {
        conseguirPeliculas();

    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('pelis'));
        console.log(peliculas);
        setListadoState(peliculas);
        return peliculas;

    }

    const borrarPeli = (id) => {
        //sacar las peliculas almacenadas
        let pelis_alamacenadas = conseguirPeliculas();

        //filtrar las peliculas para eliminar las que yo quiero
        let nuevo_array_pelis = pelis_alamacenadas.filter(peli => peli.id !== parseInt(id));

        console.log(pelis_alamacenadas, nuevo_array_pelis);

        //actualizar estado 
        setListadoState(nuevo_array_pelis);

        //actualizar los datos en el storage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));

    }

    return (
        <>
            {listadoState !== null ?
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item" >
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

                            {/*APARECE  FORMULARIO DE EDITAR*/}
                            {editar === peli.id && (
                                <Editar peli={peli}
                                    conseguirPeliculas={conseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState} />
                            )}

                        </article>
                    )
                })
                : <h2 style={{ margin: "0 auto", lineHeight: "400px" }}>No hay peliculas</h2>
            }
        </>
    )
}
