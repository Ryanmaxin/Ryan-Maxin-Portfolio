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
          <ul id="aboutList">
            <li className="aboutPoints">
              <p>
                <strong>Education:</strong> Earned a Bachelor of Computer
                Science from the University of Waterloo, graduating on the
                Dean&apos;s Honours List. 🎓
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>Experience:</strong> Across seven co-op terms, I worked
                on compilers and systems at NVIDIA, Qualcomm, AMD, and Huawei.
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>Research:</strong> I researched and implemented a new
                global initialization safety checker for the Scala 3 compiler
                with{" "}
                <a href="https://cs.uwaterloo.ca/contacts/ondrej-lhotak">
                  Ondřej Lhoták
                </a>{" "}
                at Waterloo.
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>Programming Journey:</strong> I started coding in high
                school, then got hooked on what happens beneath the code: how
                languages, compilers, and hardware fit together.
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>Technical Interests:</strong> I&apos;m drawn to computer
                architecture, low-level systems, and performance engineering
                across GPUs, DSPs, and CPUs.
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>What&apos;s Next:</strong> I&apos;m heading to NVIDIA in
                Austin as a GPU Compiler Engineer, working on the CUDA compiler
                backend.
              </p>
            </li>
            <li className="aboutPoints">
              <p>
                <strong>Outside of Work:</strong> I enjoy weightlifting,
                running, rock climbing, baseball, board games, and a good movie
                or TV series.
              </p>
            </li>
          </ul>
        </section>
        <div id="imageHolder">
          <img src={require("./portraits/mainpic_edit.jpeg")} />
        </div>
      </div>
    </div>
  );
};

export default About;
