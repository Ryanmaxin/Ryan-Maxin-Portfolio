import Project from "./project/project";
import { Tags } from "./project/projectData";
import "./projects.css";

const Projects = () => {
  return (
    <div id="projectsHolder">
      <Project
        projectData={{
          title: "Sorting Algorithm Visualizer",
          imagePath: "Sorting.png",
          description: `I've been fascinated with sorting algorithms ever since I first learned about them. This visualizer tool was born out of that curiosity, turning complex algorithms into interactive animations that bring theory to life.`,
          tags: [
            Tags.REACT,
            Tags.JS,
            Tags.HTML,
            Tags.CSS,
            Tags.ASYNC,
            Tags.GIT,
          ],
          link1: "https://example.com/link1",
          link1Name: "Live",
          link2: "https://example.com/link2",
          link2Name: "More Info",
        }}
      />
      <Project
        projectData={{
          title: "Realm Tunes",
          imagePath: "RealmTunes.png",
          description: `Realm Tunes is a Discord music bot serving over 350 users across 7 servers. I created Realm Tunes as a private way to play music with my friends after most public bots got shut down.`,
          tags: [Tags.PYTHON, Tags.ASYNC, Tags.GIT],
          link1: "",
          link1Name: "",
          link2: "https://example.com/link2",
          link2Name: "More Info",
        }}
      />
      <Project
        projectData={{
          title: "AceInterviewer",
          imagePath: "Ace.png",
          description: `a private way to play music with my friends after most public bots got shut down.`,
          tags: [Tags.KOTLIN, Tags.JC, Tags.FIREBASE, Tags.GIT],
          link1: "https://example.com/link1",
          link1Name: "Demo",
          link2: "https://example.com/link2",
          link2Name: "More Info",
        }}
      />
      <Project
        projectData={{
          title: "Syde 2026 Class Profile",
          imagePath: "SYDE.png",
          description: ` 350 users across 7 servers. I created Realm Tunes as a private way to play music with my friends after most public bots got shut down.`,
          tags: [
            Tags.REACT,
            Tags.JS,
            Tags.HTML,
            Tags.CSS,
            Tags.FIREBASE,
            Tags.GIT,
          ],
          link1: "https://example.com/link1",
          link1Name: "Live",
          link2: "https://example.com/link2",
          link2Name: "More Info",
        }}
      />
      <Project
        projectData={{
          title: "Dinosaur Game",
          imagePath: "Dino.png",
          description: `Revers. I created Realm Tunes as a private way to play music with my friends after most public bots got shut down.`,
          tags: [Tags.CPP, Tags.CMD],
          link1: "",
          link1Name: "",
          link2: "https://example.com/link2",
          link2Name: "More Info",
        }}
      />
      {/* <Project name="syde" />
      <Project name="realm" />
      <Project name="dino" /> */}
    </div>
  );
};

export default Projects;
