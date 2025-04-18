import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./facePlate.css";
import { ROUTES } from "../../routes";
const FacePlate = () => {
  return (
    <div id="facePlateContainer">
      <div id="facePlate">
        <div id="facePlateCenter">
          <h1 className="faceplateText">
            Hi, I'm <span className="emphasis">Ryan</span>.
          </h1>
          <h1 className="faceplateText">Welcome to my portfolio!</h1>
          <div id="facePlateButtons">
            <Link
              className="btn btn-outline-primary wider"
              id="faceplatebutton"
              role="button"
              to={ROUTES.CONTENT}
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
