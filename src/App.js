import "./App.css";
import ProjectList from "./components/ProjectList";
import React, { useState } from "react";

function App() {
  const [projectList, setProjectList] = useState([]);

  return (
    <div className="App">
      <div className="text-3xl">Todo App</div>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ...">
          <ProjectList
            projectList={projectList}
            setProjectList={setProjectList}
          />
        </div>
        <div className="col-span-2 ...">Project Name</div>
        <div className="row-span-2 col-span-2 ...">Each Project</div>
      </div>
    </div>
  );
}

export default App;
