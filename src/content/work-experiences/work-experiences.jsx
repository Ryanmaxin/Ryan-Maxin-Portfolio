import React from "react";
import { Tags } from "../tags";
import WorkExperience from "./work-experience/work-experience";
import "./work-experiences.css";

const WorkExperiences = () => {
  // const [isWorkExperience, setIsWorkExperience] = useState(true);
  return (
    <div id="work-experience">
      <div className="wrapper">
        <h1>Work Experience</h1>
      </div>
      <div>
        <div id="previously">
          <h4>Previously, I worked as a . . .</h4>
        </div>
        <div id="workExperiences">
          <WorkExperience
            workData={{
              name: "Compiler Engineer at Huawei",
              imagePath: "Huawei.png",
              tags: [
                Tags.CPP,
                Tags.C,
                Tags.LLVM,
                Tags.ASM,
                Tags.MT,
                Tags.JENKINS,
                Tags.DOCKER,
                Tags.GIT,
              ],
            }}
          />
          <WorkExperience
            workData={{
              name: "Fullstack Engineer at WSIB",
              imagePath: "WSIB.png",
              tags: [
                Tags.REACT,
                Tags.TS,
                Tags.PYTHON,
                Tags.LLAMA,
                Tags.TRANSFORMERS,
                Tags.FLASK,
                Tags.SQL,
                Tags.GIT,
              ],
            }}
          />
          <WorkExperience
            workData={{
              name: "Firmware Engineer at Infinera",
              imagePath: "Infinera.png",
              tags: [
                Tags.CPP,
                Tags.PYTHON,
                Tags.MATPLOTLIB,
                Tags.PANDAS,

                Tags.JENKINS,
                Tags.DOCKER,
                Tags.GIT,
              ],
            }}
          />
          <WorkExperience
            workData={{
              name: "Course and Technical Support Assistant at University of Waterloo",
              imagePath: "UW.png",
              tags: [Tags.JS],
            }}
          />
        </div>
        <div id="after">
          <h4>
            For all four co-op positions I received the highest possible
            employer rating of <b>OUTSTANDING</b>.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;
