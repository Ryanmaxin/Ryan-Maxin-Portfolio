import Navbar from "../navbar/navbar";
import Project from "./project/project";
const Projects = () => {
  return (
    <div id="projects">
      <div class="wrapper">
        <h1>My Work</h1>
      </div>
      <Project name="sort" />
      <Project name="syde" />
      <Project name="realm" />
      <Project name="dino" />
    </div>
  );
}

export default Projects;