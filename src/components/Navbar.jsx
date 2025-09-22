import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <h1 className="logo">Mi Portfolio</h1>
      </header>


      <aside className={`sidebar ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
        <ul>
          <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link to="/experiencia" onClick={() => setOpen(false)}>Experiencia</Link></li>
          <li><Link to="/educacion" onClick={() => setOpen(false)}>Educación</Link></li>
          <li><Link to="/habilidades" onClick={() => setOpen(false)}>Habilidades</Link></li>
          <li><Link to="/idiomas" onClick={() => setOpen(false)}>Idiomas</Link></li>
          <li><Link to="/cursos" onClick={() => setOpen(false)}>Cursos</Link></li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
