import { useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line
    const singleProject = projectsData.filter((val) => val.id == id);
    console.log(singleProject);
    setProject(singleProject);
  }, [id]);

  return (
    <div className="project-details-body">
      <HiArrowNarrowLeft
        onClick={() => navigate(-1)}
        className="project-details-return-btn"
      />

      {project?.map((proj) => (
        <div key={proj.id}>
          <p className="project-details-title">{proj.title}</p>
          <section className="project-wrapper">
            <p className="project-details">{proj.details}</p>
            <div className="image-wrapper">
              <Splide
                options={{
                  drag: "free",
                  pagination: true,
                  arrows: true,
                  gap: 2,
                  width: 500,
                  height: 500,
                }}
              >
                {proj.images.map((image) => (
                  <SplideSlide key={image.id}>
                    <img
                      src={image}
                      className="project-images"
                      alt="project_images"
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
