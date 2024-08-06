import Skill from "./skill/skill";

import "./about.css";
const About = () => {
  return (
    <div id="about">
      <div class="wrapper">
        <h1>About Me</h1>
      </div>
      <section class="infotainer">
        <h4>Greetings! &#128075;</h4>
        <p>
          I'm currently in my 3B term studying computer science at the
          University of Waterloo! &#127891; Over the past three years, I've had
          the privilege of gaining hands-on experience through coops at four
          amazing companies.
        </p>
        <p>
          My journey as a programmer began in high school and has blossomed into
          a genuine passion for architecting efficent and robust solutions to
          intricate challenges. The blend of creativity, logic, and the
          ever-evolving landscape of technology fuels my excitement for software
          development, and this is reflected in my track record of success in
          co-op roles, personal projects, and academic courses.
        </p>
        <p>
          I like to aim for a well rounded lifestyle. So when I'm not
          programming or studying you'll find me pursuing an active and social
          life. Specifically, I've been challenging myself lately with gym
          weightlifting - there's nothing like the thrill of beating a personal
          record. Soccer is another passion, and I'm currently enjoying my time
          on an intramural team this term with my friends. Away from the fitness
          arena, I'm sharpening my chess skills and indulging in some quality TV
          and movie time.
        </p>
        <p>
          Looking forward, my goal is to secure a meaningful co-op position for
          the summer of 2024. I'm eager to apply my skills and enthusiasm to
          make a significant contribution. Let's connect and create something
          remarkable together!
        </p>
        <p>Take a look at some of my skills below!</p>
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
};

export default About;
