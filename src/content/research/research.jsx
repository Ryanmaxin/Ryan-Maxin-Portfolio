import React from "react";
import Project from "../projects/project/project";
import { Tags } from "../tags";
import ResearchGallery from "./research-gallery";
import "./research.css";

const Research = () => {
  return (
    <section id="research">
      <div className="wrapper">
        <h1>Research</h1>
      </div>
      <Project
        projectData={{
          title: "Scala 3 Global Initialization Checker",
          media: <ResearchGallery />,
          description: (
            <>
              As an undergraduate researcher with Waterloo&apos;s{" "}
              <a href="https://plg.uwaterloo.ca">Programming Languages Group</a>
              {", "}I built a new global initialization checker for the Scala 3
              compiler. Designed to be smaller and more efficient, its mostly
              flow-insensitive analysis traces dependencies across global
              objects, reachable methods, and instantiated classes to flag
              unsafe initialization cycles.
            </>
          ),
          tags: [Tags.SCALA, Tags.COMPILERS, Tags.STATIC_ANALYSIS],
          link1: "https://ryanmaxin.github.io/ura-progress/",
          link1Name: "Research Notes",
          link2:
            "https://github.com/Ryanmaxin/scala3/tree/upgrade_global_init_checker",
          link2Name: "Implementation",
        }}
      />
    </section>
  );
};

export default Research;
