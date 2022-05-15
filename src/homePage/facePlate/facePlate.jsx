import './facePlate.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
const FacePlate = () => {
  return (
    <div id="facePlate">
      <h1>Hi! I'm Ryan,</h1>
      <h1>Welcome to my portfolio!</h1>
      <Link to="/projects"><Button>View my work</Button></Link>
      <Link to="/about"><Button>About me</Button></Link>
    </div>
  );
}

export default FacePlate;