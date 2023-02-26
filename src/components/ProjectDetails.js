import { useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";
import Aos from "aos";
import "aos/dist/aos.css";
import { ClimbingBoxLoader } from "react-spinners";

const ProjectDetails = () => {
  //Animate on scroll
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowImage = (e, { src }) => {
    e.stopPropagation();
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setIsLoading(true);
    // eslint-disable-next-line
    const singleProject = projectsData.filter(
      (val) => val.id.toString() === id
    );
    console.log(singleProject);
    setProject(singleProject);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  useEffect(() => {
    if (isModalOpen || isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen, isLoading]);

  return (
    <>
      {isModalOpen && (
        <div
          data-aos="zoom-in"
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="modal-content">
            <img src={selectedImage} alt="project" />
          </div>
        </div>
      )}
      {isLoading ? (
        <div className="spinner_wrapper">
          <ClimbingBoxLoader size={19} color={"#5CDB95"} loading={isLoading} />
        </div>
      ) : (
        <div className="project-details-body">
          <HiArrowNarrowLeft
            onClick={() => navigate(-1)}
            className="project-details-return-btn"
          />
          <div className="project">
            {project?.map((proj) => (
              <div key={proj.id}>
                <p className="project-details-title">{proj.title}</p>

                <section className="project-wrapper">
                  <p className="project-details">{proj.details}</p>
                  <p className="project-image-text">Images</p>
                  <div className="image-wrapper">
                    {proj.images.map((image) => (
                      <div key={image.id}>
                        <img
                          onClick={(e) => handleShowImage(e, image)}
                          src={image.src}
                          className="project-images"
                          alt="project_images"
                        />
                      </div>
                    ))}
                  </div>
                </section>
                <div className="video-container">
                  <p className="video-title">Demo Video</p>
                  <div className="video-wrapper">
                    <video controls muted src={proj.video} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
