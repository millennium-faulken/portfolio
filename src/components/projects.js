import urgently from "../static/urgent.png";
import bubble from "../static/bubble.PNG";
import messages from "../static/messages.png";
import { BiMessageRoundedError } from "react-icons/bi";
import "./projects.css";

export default function Projects() {
  return (
    <main className="projects">
      <section className="projectSection">
        <h1 className="projectsTitle">Some things I'm working on</h1>
        <div className="divProject">
          <img src={bubble} alt="bubble" />
          <div className="bubble" align="right">
            <h2>
              bubble
              <BiMessageRoundedError />
            </h2>
            <p>
              A real-time web messaging app with active/inactive user list, and
              google sign-in or email/password authentication.
            </p>
            <ul dir="rtl">
              <li>React</li>
              <li>Firebase</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div className="divProject">
          <div className="urgent" align="left">
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
          </div>
          <img src={urgently} alt="messages" />
        </div>
        <div className="divProject">
          <img src={messages} alt="messages" />
          <div className="messages" align="right">
            <h2>Messages to no one...</h2>
            <p>
              An app to leave messages to the world using a MERN stack,
              create(with bad word filter) and read messages.
            </p>
            <ul dir="rtl">
              <li>MondgoDb</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Redux</li>
              <li>Mongoose</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <img src={urgently} className="urgent" alt="urgent" />
            <img src={messages} className="urgent" alt="urgent" /> */}
    </main>
  );
}
