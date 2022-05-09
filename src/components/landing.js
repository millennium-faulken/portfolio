import "./landing.css";
import Nav from "./nav";
import pic from "../static/ResumePicCircle.png"

function Landing() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <section className="landing-section">
          <div className="landing-info">
            <h1>Hey there, my name is</h1>
            <h2 className="name">Justin Faulkenberry</h2>
            <h3>I'm a Software Engineer</h3>
          </div>
          <img src={pic} alt="This is me!"/>
        </section>
      </main>
    </div>
  );
}

export default Landing;
