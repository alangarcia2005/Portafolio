import "../styles/Contact.css";
import contactImage from "../assets/images/Foto_1.jpg";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-image">
        <img src={contactImage} alt="Contacto" />
      </div>

      <div className="contact-content">
        <h2>Contacto</h2>

        <p>
          ¿Tienes un proyecto en mente o quieres colaborar? Puedes contactarme a
          través de los siguientes medios.
        </p>

        <div className="contact-links">
          <a href="mailto:correo@ejemplo.com">
            <FaEnvelope className="contact-icon" />
            Correo electrónico
          </a>

          <a
            href="https://instagram.com/tu_usuario"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="contact-icon" />
            Instagram
          </a>

          <a href="https://x.com/tu_usuario" target="_blank" rel="noreferrer">
            <FaXTwitter className="contact-icon" />
            Twitter / X
          </a>

          <a
            href="https://facebook.com/tu_usuario"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="contact-icon" />
            Facebook
          </a>

          <a href="https://wa.me/521234567890" target="_blank" rel="noreferrer">
            <FaWhatsapp className="contact-icon" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
