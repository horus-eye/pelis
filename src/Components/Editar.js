import React from 'react'

export const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {

    const titulo_componente = "Editar Pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        //conseguir el target 
        const target = e.target;

        //buscar el id del objeto de la peli a actualizar

        const pelis_alamacenadas = conseguirPeliculas();
        const indice = pelis_alamacenadas.findIndex(peli => peli.id === id);
        console.log(indice);

        //crear objeto con ese indice
        let pelis_actualizadas = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        console.log(indice, peli);

        //actualizar el elemento con ese indice
        pelis_alamacenadas[indice] = pelis_actualizadas;

        //guardar el nuevo array de objetos en el local storage

        localStorage.setItem('pelis', JSON.stringify(pelis_alamacenadas));

        //actualizar estados
        setListadoState(pelis_alamacenadas);

        setEditar(0);


    };


    return (
        <div className='edit_form'>
            <h1 className='title'>{titulo_componente}  </h1>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type="text" name="titulo" className='titulo_editado'
                    defaultValue={peli.titulo}></input>
                <textarea name='descripcion' className='descripcion_editada' defaultValue={peli.descripcion} />
                <input type="submit" value="Actualizar" className='editar'></input>
            </form>
        </div >
    )
}
