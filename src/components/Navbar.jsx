import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/experiencia">Experiencia</Link></li>
        <li><Link to="/educacion">Educación</Link></li>
        <li><Link to="/habilidades">Habilidades</Link></li>
        <li><Link to="/idiomas">Idiomas</Link></li>
        <li><Link to="/cursos">Cursos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
