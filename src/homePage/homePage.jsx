import FacePlate from "./facePlate/facePlate";
import "./homePage.css";
import Nodes from "./nodes/nodes";
const HomePage = () => {
  return (
    <div id="homePage">
      <Nodes />
      <FacePlate />
    </div>
  );
};

export default HomePage;
