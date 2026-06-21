import "../styles/Skills.css";
import skillsImage from "../assets/images/Foto_6.gif";

function Skills() {
  const frontend = ["React", "JavaScript", "HTML", "CSS"];
  const backend = ["Java", "Spring Boot", "Node.js"];
  const database = ["MySQL", "PostgreSQL"];
  const tools = ["Git", "GitHub", "VS Code"];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Habilidades</h2>

        <p>
          Tecnologías y herramientas que utilizo para desarrollar aplicaciones
          web modernas, escalables y eficientes.
        </p>

        <div className="skill-group">
          <h3>Frontend</h3>
          <div className="skills-container">
            {frontend.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h3>Backend</h3>
          <div className="skills-container">
            {backend.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h3>Bases de Datos</h3>
          <div className="skills-container">
            {database.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h3>Herramientas</h3>
          <div className="skills-container">
            {tools.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skills-image">
        <img src={skillsImage} alt="Tecnologías" />
      </div>
    </section>
  );
}

export default Skills;
