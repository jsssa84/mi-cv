import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Jesús Santana Álvarez</p>
      <p>
        <FaEnvelope />{" "}
        <a href="mailto:jesus.santanaalvarez12@gmail.com">
          jesus.santanaalvarez12@gmail.com
        </a>
      </p>
      <p>
        <FaPhone /> <a href="tel:+34606092069">606092069</a>
      </p>
      <p>
        <FaLinkedin />{" "}
        <a href="https://www.linkedin.com/in/jesús-santana-á lvarez-20b634220" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;
