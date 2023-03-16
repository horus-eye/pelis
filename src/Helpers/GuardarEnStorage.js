/*funcion helper que debe ser exportada para poder utilizarse
en otros componentes */

export const GuardarEnStorage = (key, value) => {

    //conseguir los items del localStorage parseando a modo legible de Js
    let items = JSON.parse(localStorage.getItem(key));

    //comprobar si es un array
    if (Array.isArray(items)) {
        //añadir la peli o elemento nuevo
        items.push(value);
    } else {
        //crear un array con la nueva peli
        items = [value];
    }

    console.log(items);

    //guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(items));

    //devolver objeto
    return value;

};

