import { BiMessageRoundedError } from "react-icons/bi";
import { FaGithubSquare, FaExternalLinkSquareAlt } from "react-icons/fa";
import "./projects.css";

export default function Projects() {
  return (
    <main className="projects">
      <section className="projectSection">
        <h1 className="projectsTitle">Some things I'm working on</h1>
        <div className="projectsList">
          {/* <div className="projectItem">
            <h2>Quake</h2>
            <p>Utilizes the USGS API to search for recent earthquakes.</p>
            <ul>
              <li>jQuery</li>
              <li>Php</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Ajax</li>
            </ul>
          </div>
          <div className="projectItem">
            <h2>
              bubble
              <BiMessageRoundedError />
            </h2>
            <p>
              A real-time web messaging app with active/inactive user list, and
              google sign-in or email/password authentication.
            </p>
            <ul>
              <li>React</li>
              <li>Firebase</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="projectItem">
            <h2>Urgent!</h2>
            <p>
              A to-do list app with user sign-in,authentication,
              <br /> and CRUD functionality
            </p>
            <ul>
              <li>React</li>
              <li>Firebase</li>
              <li>CSS</li>
            </ul>
          </div> */}
          <div className="projectItem">
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
        </div>
      </section>
    </main>
  );
}
