import "bootstrap/dist/css/bootstrap.min.css";
import { HashLink as Link } from "react-router-hash-link";
import "./facePlate.css";
const FacePlate = () => {
  return (
    <div id="facePlate">
      <h1 className="faceplateText">
        Hi, I'm <span className="emphasis">Ryan</span>.
      </h1>
      <h1 className="faceplateText">Welcome to my portfolio!</h1>
      <div className="btn-group mr2" role="group" aria-label="Basic example">
        <Link
          className="btn btn-outline-primary"
          id="faceplatebutton"
          role="button"
          to="/Ryan-Maxin-Portfolio/content"
        >
          About me
        </Link>
        <Link
          className="btn btn-outline-primary"
          role="button"
          to="/Ryan-Maxin-Portfolio/content#projects"
        >
          Experience
        </Link>
        <Link
          className="btn btn-outline-primary"
          role="button"
          to="/Ryan-Maxin-Portfolio/content#projects"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default FacePlate;