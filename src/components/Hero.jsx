import fotoPerfil from "../assets/images/Foto.jpg";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Alan García González</h1>

        <h2>Ingeniero en informática</h2>

        <p>
          Desarrollador y Diseñador web con experiencia en la creación de sitios web modernos, funcionales y atractivos.
          Me especializo en el desarrollo frontend utilizando tecnologías como React, JavaScript, HTML y CSS,
          así como en el desarrollo backend con Java, Spring Boot y Node.js.
          Además, tengo habilidades en bases de datos como MySQL y PostgreSQL, y utilizo herramientas VS Code
          para gestionar mis proyectos de manera eficiente.
        </p>
      </div>

      <div className="hero-image">
        <img src={fotoPerfil} alt="Alan García" />
      </div>
    </section>
  );
}

export default Hero;