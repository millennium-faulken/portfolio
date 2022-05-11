import "./landing.css";
import Nav from "./nav";
import pic from "../static/ResumePicCircle.png";
import hike from "../static/hike.JPG";
import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaAngleDoubleDown,
  FaAngleDoubleUp,
} from "react-icons/fa";

function Landing() {
  const [isActive, setActive] = useState("false");

  useEffect(() => {
    console.log(window.scrollY);
    const onScroll = () => {
      if (window.scrollY > 900) {
        setActive(false);
      } else {
        setActive(true);
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [isActive, setActive]);

  return (
    <div className="App" id="top">
      <header>
        <Nav />
      </header>
      <div className="deco"></div>
      <div className="socialLinks">
        <a
          href="https://github.com/millennium-faulken"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://twitter.com/millennium_flkn"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitterSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/justin-faulkenberry/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="#about"
          // onClick={handleClick}
          className={isActive ? "downArrow" : "hide"}
        >
          <FaAngleDoubleDown />
        </a>
        <a
          href="#top"
          // onClick={handleClick}
          className={!isActive ? "upArrow" : "hide"}
        >
          <FaAngleDoubleUp />
        </a>
      </div>
      <main>
        <section className="landingSection">
          <div className="landingInfo">
            <img src={pic} alt="This is me!" />
            <h1>
              Hey there, my name is
              <span className="name">Justin Faulkenberry</span>
            </h1>
            <hr></hr>
            <p align="right">
              I'm a driven full-stack{" "}
              <span className="orangeText">software engineer</span>, currently
              searching for a full-time position in{" "}
              <span className="orangeText">Austin</span>, Texas. I'm dedicated
              to expanding knowledge and taking on challenging problems. Highly
              motivated, enthusiastic, and eager to learn new technologies and
              methods.
            </p>
          </div>
        </section>
        <section className="about" id="about">
          <h1 data-aos="fade-right">A little about myself</h1>
          <div className="aboutMe">
            <p data-aos="fade-right">
              Hi, I'm <span className="orangeText">Justin</span>. I'm a{" "}
              <span className="orangeText">software engineer</span> currently
              looking for a full-time position. My desire to learn to code
              started back in 2018 after my time in the military. I decided to
              enroll in a coding bootcamp and from there learned numerous
              skills, mainly <span className="orangeText">JavaScript</span>, its
              framework <span className="orangeText">React</span>(which this
              site is built with), <span className="orangeText">HTML</span>, and{" "}
              <span className="orangeText">CSS</span>. Since then I have also
              been persuing my degree in Computer Science, where I have learned
              even more languages such as{" "}
              <span className="orangeText">Python</span> and{" "}
              <span className="orangeText">C++</span>.
            </p>
            <p align="right" data-aos="fade-left">
              Technologies I'm currently learning:
              <li>Go</li>
              <li>Amazon Web Services</li>
              <li>Unity</li>
              <li>C#</li>
              <li>Php</li>
            </p>
          </div>
          <h1 align="right" data-aos="fade-left">
            Interests
          </h1>
          <div className="interests" align="right">
            <img src={hike} alt="Redwood Hike" data-aos="fade-right" />
            <p data-aos="fade-left">
              Some of my other interests include{" "}
              <span className="orangeText">astronomy</span>,{" "}
              <span className="orangeText">hiking</span>, history, movies,
              reading, <span className="orangeText">robotics</span>, running,
              swimming, and <span className="orangeText">travelling</span>.
              <br />
              <br />
              My dream and long-term goal is to one day start a robotics company
              that would develop autonomous robots or rovers for space
              exploration, specifically a submersible rover that would be able
              to explore the methane lakes of Saturn’s moon,{" "}
              <span className="orangeText">Titan</span>.
            </p>
          </div>
          <h1 data-aos="fade-right">Currently reading</h1>
          <div className="pcBuild" data-aos="fade-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pretium ultricies ipsum non lobortis. Mauris nibh turpis, interdum
              et elit a, lobortis pharetra sapien. Phasellus risus purus,
              placerat at augue at, porta malesuada risus. Phasellus fringilla
              mattis lectus blandit rhoncus. Mauris velit lorem, faucibus tempor
              arcu vel, consectetur porttitor quam. Etiam nec semper erat, in
              bibendum justo. Vivamus pretium ligula varius tortor posuere, ac
              condimentum dui eleifend. Pellentesque tempus, nunc pharetra
              finibus semper, purus leo scelerisque mi, at convallis nulla lorem
              in neque. Phasellus sollicitudin ipsum et leo eleifend pharetra.
            </p>
          </div>
          <h1 align="right" data-aos="fade-left">
            I like to build PCs
          </h1>
          <div className="pcBuild" align="right" data-aos="fade-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pretium ultricies ipsum non lobortis. Mauris nibh turpis, interdum
              et elit a, lobortis pharetra sapien. Phasellus risus purus,
              placerat at augue at, porta malesuada risus. Phasellus fringilla
              mattis lectus blandit rhoncus. Mauris velit lorem, faucibus tempor
              arcu vel, consectetur porttitor quam. Etiam nec semper erat, in
              bibendum justo. Vivamus pretium ligula varius tortor posuere, ac
              condimentum dui eleifend. Pellentesque tempus, nunc pharetra
              finibus semper, purus leo scelerisque mi, at convallis nulla lorem
              in neque. Phasellus sollicitudin ipsum et leo eleifend pharetra.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <h5>&#169; Justin Faulkenberry 2021</h5>
      </footer>
    </div>
  );
}

export default Landing;
