import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="welcome-section">
        <h1 className="greeting">Hello! I'm Filip</h1>
        <p className="description">
          computer science student and web deweloper
        </p>
      </section>

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
