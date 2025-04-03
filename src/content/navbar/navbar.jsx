import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ROUTES } from "../../routes";
import Hamburger from "./hamburger/hamburger";
import "./navbar.css";
import { ReactComponent as GitHub } from "./socials/github.svg";
import { ReactComponent as LinkedIn } from "./socials/linkedin.svg";
import { ReactComponent as Mail } from "./socials/mail.svg";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="titleSide">
        <Link smooth to={ROUTES.HOME} id="navName" role="button">
          <h1 id="namePlate">Ryan Maxin</h1>
        </Link>
      </div>
      <div className="navButtons nonHamburger">
        <Link
          smooth
          to={ROUTES.RESUME}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link navButton"
          // id="right"
          role="button"
        >
          Résumé
        </Link>
        <span className="dotDivider">&middot;</span>
        <Link
          smooth
          to={`${ROUTES.CONTENT}#about`}
          className="nav-link navButton"
          role="button"
        >
          About Me
        </Link>
        <span className="dotDivider">&middot;</span>
        <Link
          smooth
          to={`${ROUTES.CONTENT}#work-experience`}
          className="nav-link navButton"
          // id="right"
          role="button"
        >
          Work Experience
        </Link>
        <span className="dotDivider">&middot;</span>
        <Link
          smooth
          to={`${ROUTES.CONTENT}#projects`}
          className="nav-link navButton"
          // id="right"
          role="button"
        >
          Projects
        </Link>
      </div>
      <div className="navIcons nonHamburger">
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
            href="mailto:rymaxin@gmail.com"
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
      <Hamburger />
    </div>
  );
};

export default Navbar;
