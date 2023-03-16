import React, { useState } from 'react'

export const Buscador = ({ listadoState, setListadoState }) => {

    const [busqueda, setBusqueda] = useState('');
    const [noEncontrado, setNoEncontrado] = useState(false);

    const buscarPeli = e => {
        e.preventDefault();
        //crear estado y actualizado
        setBusqueda(e.target.value);
        console.log(busqueda);

        //filtrar para buscar coincidencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());

        });


        //comprobar si hay un resultado
        if (busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
            setNoEncontrado(true);
        } else {
            setNoEncontrado(false);
        }


        //dar valor de todo en localStorage

        //actualizar el estado del listado principal con lo que e logrado filtrar
        setListadoState(pelis_encontradas);

    }
    return (
        <div className="search" >
            <h3 className="title">Buscador: {busqueda}</h3>

            {
                (noEncontrado && busqueda.length > 1) && (<span className='no-encontrado'>No se ha encontrado alguna coincidencia</span>)
            }
            <form>
                <input type="text"
                    id="search_field"
                    name='busqueda'
                    autoComplete='off'
                    onChange={buscarPeli} />
                <button id="search">Buscar</button>
            </form>
        </div >
    )
}
