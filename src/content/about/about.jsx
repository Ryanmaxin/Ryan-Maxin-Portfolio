import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="about">
      <div className="wrapper">
        <h1>About Me</h1>
      </div>
      <div id="aboutBox">
        <section className="infotainer">
          <h4>Greetings!</h4>
          <ul id="aboutList">
            <li className="aboutPoints">
              <p>
                <strong>Current Studies:</strong> 3B term in Computer Science at
                the University of Waterloo with expected graduation in April
                2026. 🎓
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>Professional Experience:</strong> Hands-on experience
                through co-ops at four companies over the past three years.
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>Dependable:</strong> Proven track record of success in
                co-op roles, personal projects, and academic courses (take a
                look below).
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>Passionate:</strong> I love coming up with clever
                solutions to deal with interesting and complex problems and then
                implementing them efficiently in code.
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>Programming Journey:</strong> My fascination with
                programming began after taking first compsci class in high
                school. The more I learned, the more my curiosity grew, and this
                led me to major in computer science in university.
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>Lifestyle:</strong> Committed to a well-rounded life
                with regular physical activity, including weightlifting, rock
                climbing, soccer, badminton, and ping pong; I also enjoys chess
                and quality TV and movies.
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>Future Goals:</strong> Aiming to secure a meaningful
                co-op position for summer 2025 and excited to apply skills and
                enthusiasm to make a decisive contribution.
              </p>
            </li>
          </ul>
        </section>
        <div id="imageHolder">
          <img src={require("./portraits/mainpic2.png")} />
        </div>
      </div>
    </div>
  );
};

export default About;
