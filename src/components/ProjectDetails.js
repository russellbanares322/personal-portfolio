import { useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";

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
          <p>{proj.details}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
