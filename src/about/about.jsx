import Navbar from "../content/navbar/navbar";
import Skill from "./skill/skill";
import { Button } from "bootstrap";

import './about.css'
const About = () => {
  return (
    <div id="about">
      <div class="wrapper">
        <h1>About Me</h1>
      </div>
      <section class="infotainer">
        <h4>Hello, I'm Ryan Maxin! &#128075;</h4>
        <h4>I'm currently in my 2B term studying computer science at the University of Waterloo! &#127891;</h4>
        <p>
          An avid programmer since high school, I am passionate about creating websites and programs that look and feel great for users. The unique combination of creativity, logic, technology, and never running out of new things to discover drives my excitement and passion for software development. When I'm not programming or studying I like to spend my time keeping fit, socializing with friends, playing chess, or enjoying TV/movies.
        </p>
        <p>Take a look at my skills below.</p>
      </section>
      <section class="infotainer">
        <h4>Languages:</h4>
        <Skill type="language" />
        <h4>Developer Tools:</h4>
        <Skill type="tool" />
        <h4>Libraries:</h4>
        <Skill type="library" />
        <h4>Frameworks:</h4>
        <Skill type="framework" />
      </section>
    </div>
  );
}

export default About;
