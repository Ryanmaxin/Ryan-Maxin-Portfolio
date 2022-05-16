import { HashLink as Link } from "react-router-hash-link"
import './navbar.css'
const Navbar = () => {
  return (
    <div id="navbar">
      <div class="btn-group" role="group" aria-label="Basic example">
        <Link to="/" className="btn btn-primary" id="left"
          role="button">Home</Link>
        <Link smooth to="/content" className="btn btn-primary"
          role="button">About Me</Link>
        <Link smooth to="/content#projects" className="btn btn-primary" id="right"
          role="button">My Work</Link>
      </div>
    </div >
  );
}

export default Navbar;