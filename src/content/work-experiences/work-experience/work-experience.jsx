import "./work-experience.css";

const WorkExperience = ({ workData }) => {
  return (
    <div id="workExperience">
      <div id="workImgHolder">
        <img src={require(`../work-experience-images/${workData.imagePath}`)} />
      </div>
      <div id="experienceInfo">
        <h3>
          <b>{workData.name}</b>
        </h3>
        <div className="workTagHolder">
          {workData.tags.map((tag, i) => (
            <div className="tag" key={i}>
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
