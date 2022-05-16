import Nodes from "./nodes/nodes";
import FacePlate from "./facePlate/facePlate";
import './homePage.css'

const HomePage = () => {
  return (
    <div id="homePage">
      <Nodes />
      <FacePlate />
    </div>
  );
}

export default HomePage;