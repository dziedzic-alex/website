import "./Socials.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Socials() {
  return (
    <div className="socials-container">
      <a
        href="/Dziedzic_Alex_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <a
        href="https://github.com/dziedzic-alex"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={25} />
      </a>
      <a
        href="https://www.linkedin.com/in/alexdzied"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={25} />
      </a>
      <a
        href="mailto:dziedzicalex182@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <FaEnvelope size={25} />
      </a>
    </div>
  );
}

export default Socials;
