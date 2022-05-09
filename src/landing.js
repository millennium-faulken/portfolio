import "./landing.css";
import Nav from "./nav";

function Landing() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <section>
          <div className="landing-info">
            <h1>Hello</h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
