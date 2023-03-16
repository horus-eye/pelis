import { useState } from "react";
import { Buscador } from "./Components/Buscador";
import { Crear } from "./Components/Crear";
import { Listado } from "./Components/Listado";

function App() {
  const [listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">
      {/*Cabecera*/}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>
      {/*Barra de navegación*/}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>
      {/*Contenido principal*/}
      <section id="content" className="content">
        {/*aqui van las peliculas*/}
        <Listado listadoState={listadoState} setListadoState={setListadoState} />
      </section>
      {/*Barra lateral*/}
      <aside className="lateral">
        <Buscador listadoState={listadoState} setListadoState={setListadoState} />
        <Crear setListadoState={setListadoState} />
      </aside>
      {/*Pie de página*/}
      <footer className="footer">
        &copy; App en React - <a href="/#">Nachito-Apps&copy;2023</a>
      </footer>
    </div>
  );
}

export default App;
