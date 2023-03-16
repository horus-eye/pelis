import React, { useState } from 'react'
import { GuardarEnStorage } from '../Helpers/GuardarEnStorage';

export const Crear = ({ setListadoState }) => {
    const TituloComponente = "Añadir Pelicula";
    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: ""
    });

    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        //conseguir datos del form
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            /*  titulo: titulo,
             descripcion: descripcion */
            titulo: titulo,
            descripcion: descripcion
        }

        //guardar estado
        setPeliState(peli);

        //actualizar el estado del state
        setListadoState(items => {
            //agregar informacion a un array ya existente 
            return [...items, peli]

        });

        //guardar en el almacenamiento local
        GuardarEnStorage("pelis", peli);
    }



    return (
        <div className="add">

            <strong>
                {/*   {
                    //condicion por si existe un titulo y una desc. aprecera esto
                    (titulo && descripcion) && "titulo>:" + titulo
                } */}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <h3 className="title">{TituloComponente}</h3>
                <input type="text" id="titulo" placeholder="Titulo" name='titulo' />
                <textarea id="descripcion" placeholder="Descripción" name='descripcion'></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>)
}
