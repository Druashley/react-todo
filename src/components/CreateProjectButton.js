import React, { useState } from "react";

const CreateProjectButton = ({ projectList, setProjectList }) => {
  const [project, setProject] = useState({ title: "" });

  const newProjectHandler = (e) => {
    let newProjectTitle = e.target.value;
    let randomId = Date.now();
    let newProject = {
      title: newProjectTitle,
      tasks: [],
      id: randomId,
    };
    setProject(newProject);
  };

  const createProject = (e) => {
    e.preventDefault();
    setProjectList([...projectList, project]);
    setProject({ title: "" });
  };

  return (
    <div>
      <form>
        <input
          onChange={newProjectHandler}
          placeholder="Project Name?"
          className="border m-4"
          type="text"
          value={project.title}
        />
        <button
          onClick={(e) => createProject(e)}
          className="border py-1 px-2 bg-green-200"
        >
          Create new project
        </button>
      </form>
    </div>
  );
};

export default CreateProjectButton;
