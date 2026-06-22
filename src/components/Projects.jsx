import "../styles/Projects.css";

import directorio from "../assets/projects/Proyecto.png";
import menú from "../assets/projects/Proyecto_3.png";
import targeta from "../assets/projects/Proyecto_1.png";
import aplicacion from "../assets/projects/Proyecto_2.png";
import portafolio from "../assets/projects/Proyecto_4.png";
import Calculadora from "../assets/projects/Proyecto_5.png"; 

function Projects() {
  const projects = [
    {
      title: "Directorio de clientes",
      image: directorio,
      description:
        "Gestión de inventarios, préstamos y devoluciones para instituciones.",
      technologies: ["React", "Spring Boot", "MySQL"],
      demo: "#",
    },
    {
      title: "Restaurante",
      image: menú,
      description:
        "Sistema para la gestión de menús en restaurantes.",
      technologies: ["JavaScript", "React", "Vite", "MySQL"],
      demo: "#",
    },
    {
      title: "Targeta de presentacion",
      image: targeta,
      description:
        "Diseño de una tarjeta de presentación digital para una empresa o individuo.",
      technologies: ["JavaScript", "React", "Vite"],
      demo: "#",
    },
    {
      title: "Aplicacion de vivero",
      image: aplicacion,
      description:
        "Aplicación para la gestión de un vivero sobre su inventario, ventas, reportes y consultas para administradores y un mejor manejo del negocio.",
      technologies: ["JavaScript", "React", "GitHub"],
      demo: "#",
    },
    {
      title: "Portafolio profesional",
      image: portafolio,
      description:
        "Desarrollo de un portafolio profesional para mostrar habilidades, proyectos y experiencia laboral.",
      technologies: ["JavaScript", "React", "GitHub", "Vite"],
      demo: "#",
    },
    {
      title: "Calculadora de IMC",
      image: Calculadora,
      description:
        "Desarrollo de una calculadora de Índice de Masa Corporal (IMC) para ayudar a las personas a evaluar su salud y bienestar.",
      technologies: ["JavaScript", "React", "Vite"],
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>

      <p className="projects-description">
        Algunos de los proyectos en los que he trabajado.
      </p>

      <div className="projects-gallery">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
