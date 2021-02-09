import React from "react";
import CreateProjectButton from "./CreateProjectButton";
import Project from "./Project";

const ProjectList = ({ projectList, setProjectList }) => {
  return (
    <div>
      <ul>
        {projectList.map((project) => (
          <Project
            title={project.title}
            tasks={project.tasks}
            key={[project.id]}
          />
        ))}
      </ul>
      <CreateProjectButton
        projectList={projectList}
        setProjectList={setProjectList}
      />
    </div>
  );
};

export default ProjectList;
