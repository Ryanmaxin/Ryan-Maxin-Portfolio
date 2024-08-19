import React from "react";
import FacePlate from "./faceplate/facePlate";
import "./homepage.css";
import Nodes from "./nodes/nodes";
const Homepage = () => {
  return (
    <div id="homePage">
      <Nodes />
      <FacePlate />
    </div>
  );
};

export default Homepage;
