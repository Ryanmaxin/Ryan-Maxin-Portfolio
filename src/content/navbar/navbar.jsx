import { HashLink as Link } from "react-router-hash-link";
import { ReactComponent as GitHub } from "../../images/socials/github.svg";
import { ReactComponent as LinkedIn } from "../../images/socials/linkedin.svg";
import { ReactComponent as Mail } from "../../images/socials/mail.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="titleSide">
        <h1 id="namePlate">Ryan Maxin</h1>
      </div>
      <div className="navButtons">
        <Link
          smooth
          to="/Ryan-Maxin-Portfolio"
          className="nav-link navButton"
          // id="right"
          role="button"
        >
          Homepage
        </Link>
        <span className="dotDivider">&middot;</span>
        <Link
          smooth
          to="https://ryanmaxin.github.io/resume/ryan_maxin_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link navButton"
          // id="right"
          role="button"
        >
          My Resume
        </Link>
        <span className="dotDivider">&middot;</span>
        <Link
          smooth
          to="/Ryan-Maxin-Portfolio/content#about"
          className="nav-link navButton"
          role="button"
        >
          About Me
        </Link>
        <span className="dotDivider">&middot;</span>
        <Link
          smooth
          to="/Ryan-Maxin-Portfolio/content#work"
          className="nav-link navButton"
          // id="right"
          role="button"
        >
          My Work
        </Link>
      </div>
      <div className="navIcons">
        <div className="navIcon">
          <a
            href="https://github.com/Ryanmaxin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="socialIcon" />
          </a>
        </div>

        <div className="navIcon">
          <a
            href="mailto:rsmaxin@uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="socialIcon" />
          </a>
        </div>
        <div className="navIcon">
          <a
            href="https://www.linkedin.com/in/ryan-maxin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="socialIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;