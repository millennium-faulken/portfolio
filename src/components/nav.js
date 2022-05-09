import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import resume from "../static/resume.pdf";
import "./landing.css";

function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navbarStyles = {
    position: "fixed",
    width: "100%",
    transition: "top .5s",
  };

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 100) ||
        currentScrollPos < 250
    );
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}>
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
