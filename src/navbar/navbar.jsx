import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/about"><button>About Me</button></Link>
      <Link to="/projects"><button>My Work</button></Link>
    </div>
  );
}

export default Navbar;