import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { Col } from "react-bootstrap";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import { HiOutlineChevronUp } from "react-icons/hi";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <div className="main_body" id="home">
      <Navbar />
      <Title />
      <Col sm={12}>
        <Project />
      </Col>
      <About />
      <Contact />
      <footer className="text-center text-white py-2">
        &#169;All Rights Reserved 2022
      </footer>
      <Link to="#home" smooth>
        <HiOutlineChevronUp className="arrow_up" size={35} />
      </Link>
    </div>
  );
}

export default App;
