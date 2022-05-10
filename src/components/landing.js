import "./landing.css";
import Nav from "./nav";
import pic from "../static/ResumePicCircle.png";
import hike from "../static/hike.JPG";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

function Landing() {
  return (
    <div className="App">
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
              <span className="jobTitle">software engineer</span>, currently
              searching for a full-time position. I'm dedicated to expanding
              knowledge and taking on challenging problems. Highly motivated,
              enthusiastic, and eager to learn new technologies and methods.
            </p>
          </div>
        </section>
        <section className="about">
          <h1>A little about myself</h1>
          <div className="aboutMe">
            <p>
              Hi, I'm <span className="jobTitle">Justin</span>. I'm a{" "}
              <span className="jobTitle">software engineer</span> currently
              looking for a full-time position. My desire to learn to code
              started back in 2018 after my time in the military. I decided to
              enroll in a coding bootcamp and from there learned numerous
              skills, mainly <span className="jobTitle">JavaScript</span> with
              the framework <span className="jobTitle">React</span>,{" "}
              <span className="jobTitle">HTML</span>, and{" "}
              <span className="jobTitle">CSS</span>. Since then I have also been
              persuing my degree in Computer Science, where I have learned even
              more languages such as <span className="jobTitle">Python</span>{" "}
              and <span className="jobTitle">C++</span>.
            </p>
            <p align="right">
              Technologies I'm currently learning:
              <ul>
                <li>Go</li>
                <li>Amazon Web Services</li>
                <li>Unity</li>
                <li>Php</li>
              </ul>
            </p>
          </div>
          <h1 align="right">Interests</h1>
          <div className="interests" align="right">
            <img src={hike} alt="Redwood Hike" />
            <p>
              My dream and very long term goal is to one day start a robotics
              company that would develop autonomous robots or rovers for space
              exploration, specifically a submersible rover that would be able
              to explore the methane lakes of Saturn’s moon, Titan.
            </p>
          </div>
          <h1>Currently reading</h1>
          <div className="pcBuild">
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
          <h1 align="right">I like to build PCs</h1>
          <div className="pcBuild" align="right">
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
