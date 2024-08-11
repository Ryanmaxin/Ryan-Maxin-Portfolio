import About from "./about/about";
import "./content.css";
import Experiences from "./experience/experiences";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

const Content = () => {
  return (
    <div id="content">
      <Navbar />
      <div id="avoidHeader">
        <About />
        <Experiences />
        <Footer />
      </div>
    </div>
  );
};

export default Content;
