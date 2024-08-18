import About from "./about/about";
import "./content.css";
import Footer from "./footer/footer";
import MyWork from "./my-work/my-work";
import Navbar from "./navbar/navbar";

const Content = () => {
  return (
    <div id="content">
      <Navbar />
      <div id="avoidHeader">
        <About />
        <MyWork />
        <Footer />
      </div>
    </div>
  );
};

export default Content;
