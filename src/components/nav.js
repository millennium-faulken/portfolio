import { Link } from "react-router-dom";
import resume from "../static/resume.pdf";
import "./landing.css";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <h3>justinFAULKENBERRY</h3>
      </div>
      <div className="links">
        <ul>
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to={resume} target="_blank" rel="norefferrer">
            Resume
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
