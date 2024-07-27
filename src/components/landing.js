import "./landing.css";
import pic from "../static/ResumePicCircle.png";
import hike from "../static/hike.JPG";
import goggins from "../static/goggins.jpg";
import astro from "../static/calebScharf.jpg";
import shf from "../static/slaughterhouse.jpg";
import robotics from "../static/robotics.jpg";
import desk from "../static/desk.jpg";
import cert from "../static/mtacert.png";
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
    <div id="top">
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
          href="https://www.linkedin.com/in/justin-faulkenberry/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="#about" className={isActive ? "downArrow" : "hide"}>
          <FaAngleDoubleDown />
        </a>
        <a href="#top" className={!isActive ? "upArrow" : "hide"}>
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
              I'm a full-stack{" "}
              <span className="orangeText">software engineer</span> currently
              searching for a full-time position in{" "}
              <span className="orangeText">Austin</span>, Texas. I'm dedicated
              to expanding knowledge and taking on challenging problems. Driven,
              highly motivated, enthusiastic, and eager to learn new
              technologies and methods.
            </p>
          </div>
        </section>
        <section className="about" id="about">
          <h1 data-aos="fade-right">A little about myself</h1>
          <div className="aboutMe">
            <p data-aos="fade-right">
              Hi, I'm <span className="orangeText">Justin</span>. I'm a{" "}
              <span className="orangeText">software engineer</span>. My desire
              to learn to code started back in 2018 after my time in the
              military. I decided to enroll in a coding bootcamp and from there
              learned numerous skills, mainly{" "}
              <span className="orangeText">JavaScript</span>, its framework{" "}
              <span className="orangeText">React</span>(which this site is built
              with), <span className="orangeText">HTML</span>, and{" "}
              <span className="orangeText">CSS</span>. Since then I have also
              been persuing my degree in Computer Science, where I have learned
              even more languages such as{" "}
              <span className="orangeText">Python</span> and{" "}
              <span className="orangeText">C++</span>. I have also worked
              extensively <span className="orangeText">C#</span>.
            </p>
            <p className="aboutTech" align="right" data-aos="fade-left">
              Technologies I'm currently learning:
              <li>Go</li>
              <li>Amazon Web Services</li>
              <li>Unity</li>
              <li>Php</li>
            </p>
          </div>
          <div className="certifications">
            <a
              href="https://www.credly.com/badges/833e4313-2db1-45f9-a16d-13442853c82e/public_url"
              target="_blank"
              rel="noreferrer"
              data-aos="fade-up"
            >
              <img src={cert} alt="mta cert" />
            </a>
            <a
              href="https://www.credly.com/badges/833e4313-2db1-45f9-a16d-13442853c82e/public_url"
              target="_blank"
              rel="noreferrer"
              data-aos="fade-up"
            >
              <p>
                MTA: Software Development Fundamentals - Certified 2022
                <br />
                Issued by: Microsoft
                <br />
              </p>
            </a>
          </div>
          <h1 align="right" data-aos="fade-left">
            Interests
          </h1>
          <div className="interests" align="right">
            <img src={hike} alt="Redwood Hike" data-aos="fade-right" />
            <p data-aos="fade-left">
              Some of my other interests include{" "}
              <span className="orangeText">astronomy</span>,{" "}
              <span className="orangeText">hiking</span>, history, movies,{" "}
              <span className="orangeText">music</span>, philosophy, reading,{" "}
              <span className="orangeText">robotics</span>, running, swimming,
              and <span className="orangeText">travelling</span>.
              <br />
              <br />
              My dream and long-term goal is to one day start a robotics company
              that would develop autonomous robots or rovers for space
              exploration, specifically a submersible rover that would be able
              to explore the methane lakes of Saturn’s moon,{" "}
              <span className="orangeText">Titan</span>.
            </p>
          </div>
          <h1 className="booksTitle" data-aos="fade-right">
            Currently reading
          </h1>
          <div className="books">
            <p data-aos="fade-right">
              <img src={astro} alt="Copernicus Complex" />
              The Copernicus Complex
              <br /> by Caleb Scharf
              <br />
              <br />
              Perfect if you like to ponder if the existence of intelligent life
              in the universe is rare or ubiquitous.
            </p>
            <p data-aos="fade-right">
              <img src={goggins} alt="Can't Hurt Me" />
              Can't Hurt Me
              <br /> by David Goggins
              <br />
              <br />
              Incredible, inspirational story by a Navy SEAL.
            </p>
            <p data-aos="fade-left">
              <img src={robotics} alt="Learn Robotics Programming" />
              Learn Robotics w Raspberry Pi
              <br /> by Matt Timmons-Brown
              <br />
              <br />
              I'm learning the basics of robotics, this books is great for
              beginners.
            </p>
            <p data-aos="fade-left">
              <img src={shf} alt="Slaughterhouse-Five" />
              Slaughterhouse-Five
              <br /> by Kurt Vonnegut Jr.
              <br />
              <br />
              Not currently reading this one but it is one of my all-time
              favorite books.
            </p>
          </div>
          <h1 align="center" data-aos="fade-down">
            I enjoy building PCs
          </h1>
          <div className="pcBuild">
            <p data-aos="fade-down">
              Another hobby of mine is building PCs, my current PC build
              consists of:
            </p>
            <table>
              <tbody>
                <tr>
                  <td data-aos="fade-right">CPU</td>
                  <td className="orangeText" align="right" data-aos="fade-left">
                    AMD Ryzen 9 5900X
                  </td>
                </tr>
                <tr>
                  <td data-aos="fade-right">CPU cooler</td>
                  <td className="orangeText" align="right" data-aos="fade-left">
                    Noctua NH-D15 chromax.black
                  </td>
                </tr>
                <tr>
                  <td data-aos="fade-right">Motherboard</td>
                  <td className="orangeText" align="right" data-aos="fade-left">
                    MSI MAG X570 Tomahawk WIFI
                  </td>
                </tr>
                <tr>
                  <td data-aos="fade-right">Memory</td>
                  <td className="orangeText" align="right" data-aos="fade-left">
                    Corsair Vengeance LPX 16GB
                  </td>
                </tr>
                <tr>
                  <td data-aos="fade-right">Storage</td>
                  <td className="orangeText" align="right" data-aos="fade-left">
                    Samsung 970 Evo Plus 1TB
                  </td>
                </tr>
                <tr>
                  <td data-aos="fade-right">Graphics Card</td>
                  <td className="orangeText" align="right" data-aos="fade-left">
                    MSI GeForce RTX 3060 Ventus 3X
                  </td>
                </tr>
                <tr>
                  <td data-aos="fade-right">Power Supply</td>
                  <td className="orangeText" align="right" data-aos="fade-left">
                    Corsair RM850x
                  </td>
                </tr>
                <tr>
                  <td data-aos="fade-right">Case</td>
                  <td className="orangeText" align="right" data-aos="fade-left">
                    Corsair 4000D Airflow ATX
                  </td>
                </tr>
                <tr>
                  <td data-aos="fade-right">Monitor</td>
                  <td className="orangeText" align="right" data-aos="fade-left">
                    LG 34-Inch Curved UltraWide
                  </td>
                </tr>
                <tr>
                  <td data-aos="fade-right">Speakers</td>
                  <td className="orangeText" align="right" data-aos="fade-left">
                    M-Audio BX5 Studio Monitors
                  </td>
                </tr>
              </tbody>
            </table>
            <img src={desk} alt="my comp" data-aos="fade-up" />
          </div>
        </section>
      </main>
      <footer>
        <h5>Justin Faulkenberry 2021</h5>
      </footer>
    </div>
  );
}

export default Landing;
