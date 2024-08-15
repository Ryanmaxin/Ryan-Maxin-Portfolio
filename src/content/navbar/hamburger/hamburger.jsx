import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ReactComponent as GitHub } from "../../../images/socials/github.svg";
import { ReactComponent as LinkedIn } from "../../../images/socials/linkedin.svg";
import { ReactComponent as Mail } from "../../../images/socials/mail.svg";
import "../navbar.css";
import "./hamburger.css";
import { ReactComponent as Close } from "./hamburger_icons/close.svg";
import { ReactComponent as Open } from "./hamburger_icons/open.svg";

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
            to="/Ryan-Maxin-Portfolio"
            className="nav-link navButton"
            // id="right"
            role="button"
          >
            Homepage
          </Link>
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
          <Link
            smooth
            to="/Ryan-Maxin-Portfolio/content#about"
            className="nav-link navButton"
            role="button"
          >
            About Me
          </Link>
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
    </div>
  );
};

export default Hamburger;
