import React from "react";
import { Tags } from "../tags";
import Project from "./project/project";
import "./projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <div className="wrapper">
        <h1>Projects</h1>
      </div>
      <div id="projectsHolder">
        <Project
          projectData={{
            title: "Sorting Algorithm Visualizer",
            imagePath: "Sorting.png",
            description: `Born from a fascination with sorting algorithms, this visualizer tool transforms complex concepts into captivating animations. Designed to make abstract ideas engaging and accessible, it brings the intricate dance of algorithms to life, offering both novices and seasoned programmers a vivid glimpse into the mechanics of data sorting.`,
            tags: [
              Tags.REACT,
              Tags.JS,
              Tags.HTML,
              Tags.CSS,
              Tags.ASYNC,
              Tags.GIT,
            ],
            link1: "https://ryanmaxin.github.io/Sorting-Algorithm-Visualizer/",
            link1Name: "Live",
            link2: "https://github.com/Ryanmaxin/Sorting-Algorithm-Visualizer",
            link2Name: "Github",
          }}
        />
        <Project
          projectData={{
            title: "Realm Tunes",
            imagePath: "RealmTunes.png",
            description: `A vibrant and feature-rich Discord music bot, Realm Tunes enhances the music listening experience for over 350 users across 7 servers. I created Realm Tunes as a way to play music with my friends after most public bots got shut down.`,
            tags: [Tags.PYTHON, Tags.ASYNC, Tags.GIT],
            link1: "",
            link1Name: "",
            link2: "https://github.com/Ryanmaxin/Realm-Tunes-2.0",
            link2Name: "Github",
          }}
        />
        <Project
          projectData={{
            title: "Performant Transactional Memory",
            imagePath: "TM.png",
            description: `A software transactional memory library built to ensure correctness, opacity, and high performance in concurrent programming. Delivers a 6x speedup over traditional course-grained locking.`,
            tags: [Tags.CPP, Tags.MT, Tags.GIT],
            link1: "",
            link1Name: "",
            link2:
              "https://github.com/Ryanmaxin/Performant-Transactional-Memory",
            link2Name: "Github",
          }}
        />
        <Project
          projectData={{
            title: "AceInterviewer",
            imagePath: "Ace.png",
            description: `AceInterviewer provides a dedicated platform where students and professionals can practice interview questions, share responses, and gain constructive feedback from a knowledgable community, helping them better prepare for real-world interviews. Added to the wall of fame of outstanding projects for CS 346.`,
            tags: [Tags.KOTLIN, Tags.JC, Tags.FIREBASE, Tags.GIT],
            link1: "",
            link1Name: "",
            link2: "https://github.com/Ryanmaxin/AceInterviewer",
            link2Name: "Github and Demo",
          }}
        />
        <Project
          projectData={{
            title: "Syde 2026 Class Profile",
            imagePath: "SYDE.png",
            description: `Continuing University of Waterloo tradition, I joined 18 Systems Design Engineering classmates to develop the 2026 SYDE class profile. As a lead on the software team, I spearheaded the creation of navigation and all five statistics pages, and organized team meetings that drove the project to completion two weeks ahead of schedule.`,
            tags: [
              Tags.REACT,
              Tags.JS,
              Tags.FIREBASE,
              Tags.VERCEL,
              Tags.HTML,
              Tags.CSS,
              Tags.GIT,
            ],
            link1: "https://syde26.life/",
            link1Name: "Live",
            link2: "https://github.com/SYDE-26/1A-Class-Profile-Website",
            link2Name: "Github",
          }}
        />
        <Project
          projectData={{
            title: "Dinosaur Game",
            imagePath: "Dino.png",
            description: `I created a clone of Google's famous "Dinosaur Game" that runs entirely in the terminal!`,
            tags: [Tags.CPP, Tags.CMD, Tags.ASYNC],
            link1: "",
            link1Name: "",
            link2: "https://github.com/Ryanmaxin/Dinosaur-Game",
            link2Name: "Github",
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
