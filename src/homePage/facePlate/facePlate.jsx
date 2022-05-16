import './facePlate.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashLink as Link } from "react-router-hash-link"
const FacePlate = () => {
  return (
    <div id="facePlate">
      <h1 className="faceplateText">Hi, I'm <span className="emphasis">Ryan</span>.</h1>
      <h1 className="faceplateText">Welcome to my portfolio!</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Link className="btn btn-outline-primary" id="faceplatebutton"
          role="button" to="/content">About me</Link>
        <Link className="btn btn-outline-primary"
          role="button" to="/content#projects">View my work</Link>
      </div>
    </div>
  );
}

export default FacePlate;