import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <div className="profile-circle">AG</div>

        <h2>Mi Portafolio</h2>
      </div>

      <ul className="sidebar-menu">
        <li>
          <a href="#home">
            <FaHome className="icon" />
            <span>Inicio</span>
          </a>
        </li>

        <li>
          <a href="#about">
            <FaUser className="icon" />
            <span>Sobre mí</span>
          </a>
        </li>

        <li>
          <a href="#skills">
            <FaCode className="icon" />
            <span>Habilidades</span>
          </a>
        </li>

        <li>
          <a href="#projects">
            <FaProjectDiagram className="icon" />
            <span>Proyectos</span>
          </a>
        </li>

        <li>
          <a href="#contact">
            <FaEnvelope className="icon" />
            <span>Contacto</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
