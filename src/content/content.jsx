import About from "./about/about";
import "./content.css";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import Projects from "./projects/projects";
import WorkExperiences from "./work-experiences/work-experiences";

const Content = () => {
  return (
    <div id="content">
      <Navbar />
      <div id="avoidHeader">
        <About />
        <WorkExperiences />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Content;
