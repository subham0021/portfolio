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
            href="https://github.com/sdindic"
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
          <a
            href="https://www.x.com/sd_indic/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterSquare className="foot-icon" />
            &nbsp;&nbsp;Twitter
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
