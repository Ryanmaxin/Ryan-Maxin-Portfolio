import { HashLink as Link } from "react-router-hash-link"
import './navbar.css'
const Navbar = () => {
  return (
    <div id="navbar">
      <div class="btn-group" role="group" aria-label="Basic example">
        <Link to="/Ryan-Maxin-Portfolio" className="btn btn-outline-primary" id="left"
          role="button">Home</Link>
        <Link smooth to="/Ryan-Maxin-Portfolio/content#projects" className="btn btn-outline-primary" id="right"
          role="button">My Work</Link>
      </div>
    </div >
  );
}

export default Navbar;