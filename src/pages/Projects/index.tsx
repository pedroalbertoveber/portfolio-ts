import { ProjectContext } from "common/ProjectsContext";
import { IProject } from "interface/Project";
import React, { ReactElement, useState, useEffect, useContext } from "react";
import { search } from "services/api";

const Projects = (): ReactElement => {

  const { projectList, setProjectList } = useContext(ProjectContext);

  useEffect(() => {
    search('repos', setProjectList);
  }, []);

  return (
    <main>
      {projectList.map(item => <span>{item.name}</span>)}
    </main>
  );
};

export default Projects;