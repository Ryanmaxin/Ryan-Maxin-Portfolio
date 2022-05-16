import About from "../about/about";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import Projects from "./projects/projects";

const Content = () => {
  return (
    <div id="content">
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Content;