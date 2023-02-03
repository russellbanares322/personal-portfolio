import "./App.css";
import { HiArrowNarrowUp } from "react-icons/hi";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
// import ProjectDetails from "./components/ProjectDetails";

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
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/project-details/:id" element={<ProjectDetails />} /> */}
          </Routes>
          <footer>&#169; Created by Russ</footer>
          <LinkScroll to="home" smooth>
            <HiArrowNarrowUp className="arrow_up" size={30} />
          </LinkScroll>
        </div>
      )}
    </>
  );
}

export default App;
