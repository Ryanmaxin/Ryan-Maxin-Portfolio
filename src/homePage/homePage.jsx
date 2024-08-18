import FacePlate from "./faceplate/faceplate";
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
