import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <footer className="px-4">
        <div className="foot-left d-flex">
          <p>Subham Das &copy; 2024</p>
        </div>
        <div className="foot-right d-flex">
          <a
            href="https://github.com/subham0021"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            &nbsp;&nbsp;GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/subhamdas21/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="foot-icon" />
            &nbsp;&nbsp;Linkedin
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
