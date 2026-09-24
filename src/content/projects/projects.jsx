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
            title: "Joos Compiler",
            imagePath: "joos.png",
            description: `An OCaml compiler for Joos 1W, a subset of Java, built with two teammates for CS 444. It scans and parses programs across multiple files, resolves names, checks types, and generates 32-bit x86 assembly with dynamic dispatch and runtime type checks.`,
            tags: [Tags.OCAML, Tags.ASM, Tags.GIT, Tags.COMPILERS],
            link1: "https://ryanmaxin.github.io/java-compiler-public/",
            link1Name: "Design Doc",
            link2: "",
            link2Name: "",
          }}
        />
        <Project
          projectData={{
            title: "Black Hole Renderer",
            imagePath: "Blackhole.jpg",
            description: `A real-time WebGL 2 renderer that traces light through curved spacetime around a black hole. Built with TypeScript and GLSL, it visualizes gravitational lensing, a glowing accretion disk, and the event horizon, with interactive camera and rendering controls.`,
            tags: [Tags.TS, Tags.WEBGL, Tags.GLSL, Tags.GIT],
            link1: "https://ryanmaxin.github.io/Blackhole-Renderer/",
            link1Name: "Live",
            link2: "https://github.com/Ryanmaxin/Blackhole-Renderer",
            link2Name: "Github",
          }}
        />
        <Project
          projectData={{
            title: "Performant Transactional Memory",
            imagePath: "TM.png",
            description: `A software transactional memory library built to ensure correctness, opacity, and high performance in concurrent programming. Delivers a 6x speedup over traditional coarse-grained locking.`,
            tags: [Tags.CPP, Tags.MT, Tags.GIT, Tags.CONCURRENCY],
            link1: "",
            link1Name: "",
            link2:
              "https://github.com/Ryanmaxin/Performant-Transactional-Memory",
            link2Name: "Github",
          }}
        />
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
            title: "Watopoly",
            imagePath: "Watopoly.png",
            imagePosition: "center bottom",
            description: `A C++ terminal game that brings the University of Waterloo Campus to Monopoly. Built with a three-person team, it supports up to six players, property trading, building improvements, and saved games.`,
            tags: [Tags.CPP, Tags.CMD, Tags.GIT],
            link1: "",
            link1Name: "",
            link2: "https://ryanmaxin.github.io/watopoly-public/",
            link2Name: "Design Doc",
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
        <Project
          projectData={{
            title: "CloudPress",
            imagePath: "CloudPress.png",
            description: `A local-only macOS utility that creates lower-resolution copies of videos in an iCloud Photo Library to help reclaim storage.`,
            tags: [Tags.SWIFT, Tags.GIT, Tags.Encoding],
            link1: "",
            link1Name: "",
            link2: "https://github.com/Ryanmaxin/CloudPress",
            link2Name: "Github",
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
