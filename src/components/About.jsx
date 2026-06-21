import "../styles/About.css";
import fotoAbout from "../assets/images/Foto_8.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img src={fotoAbout} alt="Sobre mí" />
      </div>

      <div className="about-content">
        <h2>Sobre mí</h2>

        <p>
          Soy estudiante del Tecnologico de estudios superiores de san felipe del progreso de la carrera
          en Ingenieria informatica, me enfoco en el desarrollo web y diseño de paginas y aplicaciones, actualmente
          estoy en continuo desarrollo de habilidades y conocimientos en bases de datos, arquitecturas modernas y
          desarrollo de aplicaciones web, de escritorio, moviles y empresariales.
        </p>

        <p>
          Me apasiona crear soluciones funcionales, intuitivas y escalables,
          combinando buenas prácticas de programación con un diseño atractivo.
        </p>
      </div>
    </section>
  );
}

export default About;
