import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import { HiOutlineChevronUp } from "react-icons/hi";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="spinner_wrapper">
          <ClimbingBoxLoader size={19} color={"#5CDB95"} loading={isLoading} />
        </div>
      ) : (
        <div className="main_body" id="home">
          <Navbar />
          <Title />
          <Project />
          <About />
          <Contact />
          <footer className="text-center text-white py-2">
            &#169; Created by Russ
          </footer>
          <Link to="#home" smooth>
            <HiOutlineChevronUp className="arrow_up" size={35} />
          </Link>
        </div>
      )}
    </>
  );
}

export default App;
