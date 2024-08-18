import React, { useState } from "react";
import Projects from "./experiences/projects";
import WorkExperiences from "./experiences/work-experiences";
import "./my-work.css";
const MyWork = () => {
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
      <div>{isWorkExperience ? <WorkExperiences /> : <Projects />}</div>
    </div>
  );
};

export default MyWork;
