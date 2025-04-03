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
          className={isOpen ? "navIcon closed" : "navIcon"}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Open className="socialIcon noscale" />
        </button>
        <button
          className={isOpen ? "navIcon" : "navIcon closed"}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Close className="socialIcon noscale" />
        </button>
      </div>
      <div
        className={isOpen ? "dropmenu hamburger" : "dropmenu hamburger closed"}
      >
        <div className="navList">
          <Link
            smooth
            to="https://ryanmaxin.github.io/resume/ryan_maxin_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link navButton"
            // id="right"
            role="button"
          >
            Résumé
          </Link>
          <Link
            smooth
            to={`${ROUTES.CONTENT}#about`}
            className="nav-link navButton"
            role="button"
          >
            About Me
          </Link>
          <Link
            smooth
            to={`${ROUTES.CONTENT}#work-experience`}
            className="nav-link navButton"
            // id="right"
            role="button"
          >
            Work Experience
          </Link>
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
      </div>
    </div>
  );
};

export default Hamburger;
