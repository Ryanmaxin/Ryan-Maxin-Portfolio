import Navbar from "../navbar/navbar";
import Skill from "./skill/skill";
import './about.css'
const About = () => {
  return (
    <div id="about">
      <Navbar />
      <h1>About Me</h1>
      <section>
        <h3>Hello, I am Ryan Maxin! &#128075;</h3>
        <h3>I'm currently in my 1B term studying engineering at the University of Waterloo! &#127891;</h3>
        <p>
          An avid programmer since high school, I am passionate about creating websites and programs that look and feel great for users. The unique combination of creativity, logic, technology, and never running out of new things to discover drives my excitement and passion for software development. When I'm not programming or studying I like to spend my time keeping fit, socializing with friends, playing chess, or enjoying TV/movies.
        </p>
      </section>
      <section>
        <h2>Skills:</h2>
        <p>
          <h3>Languages:</h3>
          <Skill type="language" />
          <h3>Frameworks</h3>
          <Skill type="framework" />
          <h3>Tools:</h3>
          <Skill type="tool" />
        </p>
      </section>
      <section>
        <h3>
          Take A peak at some of my work to see how I used these skills!
        </h3>
      </section>
    </div>
  );
}

export default About;