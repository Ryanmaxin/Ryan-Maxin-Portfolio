import React, { useState } from "react";
import "./experiences.css";
import Projects from "./projects/projects";
const Experiences = () => {
  const [isWorkExperience, setIsWorkExperience] = useState(true);
  return (
    <div id="work">
      <div class="wrapper">
        <h1>My Work</h1>
      </div>
      <div id="experiencesPicker">
        <button
          className={
            isWorkExperience
              ? "nav-link navButton isSelected"
              : "nav-link navButton"
          }
          onClick={() => {
            setIsWorkExperience(true);
          }}
        >
          Work Experience
        </button>
        <span id="experienceDivider"> | </span>
        <button
          className={
            isWorkExperience
              ? "nav-link navButton"
              : "nav-link navButton isSelected"
          }
          onClick={() => {
            setIsWorkExperience(false);
          }}
        >
          Projects
        </button>
      </div>
      {isWorkExperience ? <Projects /> : <Projects />}
    </div>
  );
};

export default Experiences;
