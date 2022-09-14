import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { Col } from "react-bootstrap";
import Title from "./components/Title";
import PNavbar from "./components/PNavbar";

function App() {
  return (
    <div className="main_body" id="home">
      <PNavbar />
      <Title />
      <Col sm={12}>
        <Project />
      </Col>
      <About />
      <Contact />
      <footer className="text-center text-white py-2">
        &#169;All Rights Reserved 2022
      </footer>
    </div>
  );
}

export default App;
