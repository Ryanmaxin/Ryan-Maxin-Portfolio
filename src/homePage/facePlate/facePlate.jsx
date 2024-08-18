import "bootstrap/dist/css/bootstrap.min.css";
import { HashLink as Link } from "react-router-hash-link";
import "./faceplate.css";
const FacePlate = () => {
  return (
    <div id="facePlateContainer">
      <div id="facePlate">
        <h1 className="faceplateText">
          Hi, I'm <span className="emphasis">Ryan</span>.
        </h1>
        <h1 className="faceplateText">Welcome to my portfolio!</h1>
        <div id="facePlateButtons">
          <div
            className="btn-group mr2"
            role="group"
            aria-label="Basic example"
          >
            <Link
              className="btn btn-outline-primary wider"
              id="faceplatebutton"
              role="button"
              to="/Ryan-Maxin-Portfolio/content"
            >
              Dive In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacePlate;
