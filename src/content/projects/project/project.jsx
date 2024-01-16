import "./project.css";
const Project = ({ name }) => {
  switch (name) {
    case "realm":
      return (
        <div class="projectTile">
          <h2>Realm Tunes</h2>
          <div class="projectInfo">
            <img src={require("../projectImages/RealmTunes.png")} />
            <div class="tagholder">
              <div class="tag">
                <p>Python</p>
              </div>
              <div class="tag">
                <p>Git</p>
              </div>
            </div>
            <div class="description">
              <p>
                Realm Tunes is a Discord application created with the Discord.py
                API. This bot comes with 17 commands, and can play music from
                Youtube, SoundCloud, Spotify, and mp4 files. Realm Tunes is
                hosted 24/7 and is currently used as the music bot on seven
                servers serving over 350 users.{" "}
              </p>
            </div>
            <div class="outlier">
              <a
                target="_blank"
                href="https://github.com/Ryanmaxin/Realm-Tunes-2.0"
                type="a"
                class="btn btn-outline-primary"
              >
                <h4>More Info</h4>
              </a>
            </div>
          </div>
        </div>
      );
    case "sort":
      return (
        <div class="projectTile">
          <h2>Sorting Algorithm Visualizer</h2>
          <div class="projectInfo">
            <img src={require("../projectImages/Sorting.png")} />

            <div class="tagholder">
              <div class="tag">
                <p>React</p>
              </div>
              <div class="tag">
                <p>Javascript</p>
              </div>
              <div class="tag">
                <p>HTML</p>
              </div>
              <div class="tag">
                <p>CSS</p>
              </div>
              <div class="tag">
                <p>Material UI</p>
              </div>
              <div class="tag">
                <p>Async</p>
              </div>
              <div class="tag">
                <p>Git</p>
              </div>
            </div>
            <div class="description">
              <p>
                Ever since hearing about sorting algorithms, I was curious about
                what they actually looked like. I created this visualizer tool
                to allow me to do so, and solidify my knowledge in the process.
                6 of the most common and popular sorts are visualized, each on
                arrays of varying sizes and speeds. The user can also choose the
                pivot choice for quick sort. Array operations are color coded
                and labelled in the legend to allow the user to fully understand
                what they are seeing.{" "}
              </p>
            </div>
            <div class="outlier">
              <a
                target="_blank"
                href="https://ryanmaxin.github.io/Sorting-Algorithm-Visualizer/"
                type="a"
                class="btn btn-outline-primary"
              >
                <h4>Live</h4>
              </a>
              <a
                target="_blank"
                href="https://github.com/Ryanmaxin/Sorting-Algorithm-Visualizer"
                type="a"
                class="btn btn-outline-primary"
              >
                <h4>More Info</h4>
              </a>
            </div>
          </div>
        </div>
      );
    case "syde":
      return (
        <div class="projectTile">
          <h2>SYDE 2026 Class Profile</h2>
          <div class="projectInfo">
            <img src={require("../projectImages/SYDE.png")} />

            <div class="tagholder">
              <div class="tag">
                <p>React</p>
              </div>
              <div class="tag">
                <p>Javascript</p>
              </div>
              <div class="tag">
                <p>HTML</p>
              </div>
              <div class="tag">
                <p>SASS</p>
              </div>
              <div class="tag">
                <p>Material UI</p>
              </div>
              <div class="tag">
                <p>Chart.js</p>
              </div>
              <div class="tag">
                <p>React Router</p>
              </div>
              <div class="tag">
                <p>Firebase</p>
              </div>
              <div class="tag">
                <p>Git</p>
              </div>
            </div>
            <div class="description">
              <p>
                Following University of Waterloo tradition, myself and 18 other
                students from the Systems Design Engineering cohort working on
                data science, design and web dev created the 2026 SYDE class
                profile! As a lead member of the software team, I created the
                Co-op, Academics, Demographics, High School, and Lifestyle
                pages, along with the footer and navigation. I was able to
                reinforce my React skills, aswell as gaining the experience of
                working on a large project with Git source control.{" "}
              </p>
            </div>
            <div class="outlier">
              <a
                target="_blank"
                href="https://syde26.life/"
                type="a"
                class="btn btn-outline-primary"
              >
                <h4>Live</h4>
              </a>
              <a
                target="_blank"
                href="https://github.com/SYDE-26/1A-Class-Profile-Website"
                type="a"
                class="btn btn-outline-primary"
              >
                <h4>More Info</h4>
              </a>
            </div>
          </div>
        </div>
      );
    case "dino":
      return (
        <div class="projectTile">
          <h2>Dinosaur Game</h2>
          <div class="projectInfo">
            <img src={require("../projectImages/Dino.png")} />

            <div class="tagholder">
              <div class="tag">
                <p>C++</p>
              </div>
              <div class="tag">
                <p>Command Line</p>
              </div>
              <div class="tag">
                <p>Bash</p>
              </div>
            </div>
            <div class="description">
              <p>
                A clone of Google's well known "Dinosaur Game", this game has
                you trying to reach the end of the stage while you avoid cacti
                coming at you at different speeds! The game includes a score and
                timer, parabolic jumping, aswell as procedurally generated
                clouds. It works and plays entirely in the terminal!{" "}
              </p>
            </div>
            <div class="outlier">
              <a
                target="_blank"
                href="https://github.com/Ryanmaxin/Dinosaur-Game"
                type="a"
                class="btn btn-outline-primary"
              >
                <h4>More Info</h4>
              </a>
            </div>
          </div>
        </div>
      );
    default:
      break;
  }
};

export default Project;
