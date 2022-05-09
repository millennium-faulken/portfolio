import "./landing.css";
import Nav from "./nav";
import pic from "../static/ResumePicCircle.png";

function Landing() {
  return (
    <div className="App">
      <header className="navbar">
        <Nav />
      </header>
      <main>
        <section className="landing-section">
          <div className="landing-info">
            <h1>Hey there, my name is</h1>
            <h2 className="name">Justin Faulkenberry</h2>
            <hr></hr>
            <p align="right">
              I'm a driven full-stack <span className="job-title">software engineer</span>, currently searching for
              a full-time position. I'm dedicated to expanding knowledge and taking
              on challenging problems. Highly motivated, enthusiastic, and eager
              to learn new technologies and methods.
            </p>
          </div>
          <img src={pic} alt="This is me!" />
        </section>
        <section>
          
        </section>
      </main>
    </div>
  );
}

export default Landing;
