import "./project.css";

const Project = ({ projectData }) => {
  return (
    <div className="projectTile">
      <h3>{projectData.title}</h3>
      <div className="projectInfo">
        <img src={require(`../project-images/${projectData.imagePath}`)} />
        <div className="tagholder">
          {projectData.tags.map((tag, i) => (
            <div className="tag" key={i}>
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <div className="description">
          <p>{projectData.description}</p>
        </div>
        <div className="outlier">
          {projectData.link1 && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={projectData.link1}
              type="a"
              className="btn btn-outline-primary"
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
              className="btn btn-outline-primary"
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
