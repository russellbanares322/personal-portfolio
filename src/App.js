import "./App.css";
import { HiArrowNarrowUp } from "react-icons/hi";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <div className="main_body" id="home">
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
        </Routes>
        {!isLoading && (
          <>
            <footer>&#169; Created by Russ 🤟</footer>
            <HiArrowNarrowUp
              onClick={() => window.scroll(0, 0)}
              className="arrow_up"
              size={45}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
