import { BiMessageRoundedError } from "react-icons/bi";
import { FaGithubSquare, FaExternalLinkSquareAlt } from "react-icons/fa";
import "./projects.css";

export default function Projects() {
  return (
    <main className="projects">
      <section className="projectSection">
        <h1 className="projectsTitle">Check out some things I've built</h1>
        <div className="projectsList">
          <div className="projectItem" data-aos="fade-right">
            <h1 className="messages">
              Messages to no one...{"    "}
              <a
                href="https://messagetheworld.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </h1>
            <p>
              A web app to leave messages to the world using a MERN stack,
              create (with bad word filter) and read messages.
            </p>
            <h3>Tech Used:</h3>
            <div className="tech">
              <ul>
                <p>Front-End</p>
                <li>React.js</li>
                <li>Redux</li>
                <li>Sass</li>
                <li>Netlify</li>
                <a
                  href="https://github.com/millennium-faulken/notes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </ul>
              <ul>
                <p>Back-End</p>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MondgoDb</li>
                <li>Mongoose</li>
                <li>Heroku</li>
                <a
                  href="https://github.com/millennium-faulken/notes-backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </ul>
            </div>
          </div>
          <div className="projectItem" data-aos="fade-left">
            <h1 className="bubble">
              bubble
              <BiMessageRoundedError />
              {"    "}
              <a
                href="https://bubbleitup.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </h1>
            <p>
              A real-time web messaging app with active/inactive user list, and
              google sign-in or email/password authentication.
            </p>
            <h3>Tech Used:</h3>
            <div className="tech">
              <ul>
                <li>React</li>
                <li>Firebase</li>
                <li>CSS</li>
                <a
                  href="https://github.com/millennium-faulken/messenger"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </ul>
            </div>
          </div>
          <div className="projectItem" data-aos="fade-right">
            <h1 className="quake">
              Quake{"    "}
              <a
                href="http://earthquakewatcher.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </h1>
            <p>
              A web site the utilizes the USGS API to show the user the most
              recent earthquakes in the last month of a specified magnitude or
              greater
            </p>
            <h3>Tech Used:</h3>
            <div className="tech">
              <ul>
                <li>jQuery</li>
                <li>Php</li>
                <li>Ajax</li>
                <li>HTML</li>
                <li>CSS</li>
                <a
                  href="https://github.com/millennium-faulken/quake"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </ul>
            </div>
          </div>
          <div className="projectItem" data-aos="fade-left">
            <h1 className="winCalc">Windows Calculator Clone</h1>
            <p>A clone of the Windows Calculator</p>
            <h3>Tech Used:</h3>
            <div className="tech">
              <ul>
                <li>C#</li>
                <li>.Net</li>
                <li>Visual Studio 2022</li>
                <a
                  href="https://github.com/millennium-faulken/windows-calculator-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </ul>
            </div>
          </div>
          <div className="projectItem" data-aos="fade-right">
            <h1 className="urgent">
              Urgent!{"    "}
              <a
                href="https://urgently.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </h1>
            <p>
              A to-do list app with user sign-in, authentication, and CRUD
              functionality.
            </p>
            <h3>Tech Used:</h3>
            <div className="tech">
              <ul>
                <li>React</li>
                <li>Firebase</li>
                <li>CSS</li>
                <a
                  href="https://github.com/millennium-faulken/urgent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
