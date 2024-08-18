import "./experience.css";

const Project = ({ projectData }) => {
  return (
    <div class="projectTile">
      <h3>{projectData.title}</h3>
      <div class="projectInfo">
        <img src={require(`../experience-images/${projectData.imagePath}`)} />
        <div class="tagholder">
          {projectData.tags.map((tag, i) => (
            <div className="tag" key={i}>
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <div class="description">
          <p>{projectData.description}</p>
        </div>
        <div class="outlier">
          {projectData.link1 && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={projectData.link1}
              type="a"
              class="btn btn-outline-primary"
            >
              <h4>{projectData.link1Name}</h4>
            </a>
          )}
          {projectData.link2 && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={projectData.link2}
              type="a"
              class="btn btn-outline-primary"
            >
              <h4>{projectData.link2Name}</h4>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
