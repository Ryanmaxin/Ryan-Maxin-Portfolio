import About from "./about/about";
import "./content.css";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import Projects from "./projects/projects";
import Resume from "./resume/resume";

const Content = () => {
  return (
    <div id="content">
      <Navbar />
      <div id="avoidHeader">
        <About />
        <Projects />
        <Resume />
        <Footer />
      </div>
    </div>
  );
};

export default Content;
