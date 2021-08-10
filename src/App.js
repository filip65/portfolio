import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Typical from "react-typical";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="welcome-section">
        <h1 className="greeting">Hello! I'm Filip</h1>
        <p className="description">
          I am a{" "}
          <Typical
            className="description"
            wrapper="span"
            steps={[
              "computer science student",
              1500,
              "frotend web developer",
              1500,
              "determined to learn new things!",
              1500,
            ]}
          />
        </p>
      </section>

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
