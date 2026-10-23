import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ROUTES } from "../../../routes";
import "../navbar.css";
import { ReactComponent as GitHub } from "../socials/github.svg";
import { ReactComponent as LinkedIn } from "../socials/linkedin.svg";
import { ReactComponent as Mail } from "../socials/mail.svg";
import { ReactComponent as Close } from "./hamburger-icons/close.svg";
import { ReactComponent as Open } from "./hamburger-icons/open.svg";
import "./hamburger.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="hamburgerMenu">
      <div className="navIcons" id="hamIcon">
        <button
          type="button"
          aria-label="Open menu"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          className={isOpen ? "navIcon closed" : "navIcon"}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Open className="socialIcon noscale" />
        </button>
        <button
          type="button"
          aria-label="Close menu"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          className={isOpen ? "navIcon" : "navIcon closed"}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Close className="socialIcon noscale" />
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={isOpen ? "dropmenu hamburger" : "dropmenu hamburger closed"}
      >
        <div className="navList">
          <Link
            smooth
            to={ROUTES.RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link navButton"
            onClick={() => setIsOpen(false)}
            // id="right"
          >
            Résumé
          </Link>
          <Link
            smooth
            to={`${ROUTES.CONTENT}#about`}
            className="nav-link navButton"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <Link
            smooth
            to={`${ROUTES.CONTENT}#work-experience`}
            className="nav-link navButton"
            onClick={() => setIsOpen(false)}
            // id="right"
          >
            Work Experience
          </Link>
          <Link
            smooth
            to={`${ROUTES.CONTENT}#research`}
            className="nav-link navButton"
            onClick={() => setIsOpen(false)}
          >
            Research
          </Link>
          <Link
            smooth
            to={`${ROUTES.CONTENT}#projects`}
            className="nav-link navButton"
            onClick={() => setIsOpen(false)}
            // id="right"
          >
            Projects
          </Link>
        </div>
        <div className="navIcons">
          <div className="navIcon">
            <a
              href="https://github.com/Ryanmaxin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GitHub className="socialIcon" />
            </a>
          </div>

          <div className="navIcon">
            <a
              href="mailto:rymaxin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Ryan"
            >
              <Mail className="socialIcon" />
            </a>
          </div>
          <div className="navIcon">
            <a
              href="https://www.linkedin.com/in/ryan-maxin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedIn className="socialIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
