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
      <div className="workExperiences">
        <h4>Currently, I work as a . . . </h4>
        <WorkExperience
          workData={{
            name: "Software Engineer at AMD",
            imagePath: "AMD.svg",
            tags: [
              Tags.CPP,
              Tags.C,
              Tags.MT,
              Tags.GIT,
              Tags.Encoding,
              Tags.OpenCL,
              Tags.OpenGL,
            ],
          }}
        />
      </div>
      <div>
        <div id="previously">
          <h4>Previously, I worked as a . . .</h4>
        </div>
        <div className="workExperiences">
          <WorkExperience
            workData={{
              name: "Compiler Engineer at Huawei",
              imagePath: "Huawei.svg",
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
              name: "Full-stack Engineer at WSIB",
              imagePath: "WSIB.svg",
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
              imagePath: "Infinera.svg",
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
              name: "Course and Technical Support Assistant at the University of Waterloo",
              imagePath: "UW.svg",
              tags: [Tags.JS],
            }}
          />
        </div>
        <div id="after">
          <h4>
            For all four past co-op positions I received the highest possible
            employer rating of <b id="outstanding">outstanding</b>.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;
