import { IProject } from "interface/Project";
import React, { createContext, useState, ReactNode } from "react";
interface Props {
  projectList: IProject[],
  setProjectList: React.Dispatch<React.SetStateAction<IProject[]>>,
}

const initialValue: Props = {
  projectList: [],
  setProjectList: () => {},
};

export const ProjectContext = createContext(initialValue);
ProjectContext.displayName = 'Project Context';

export const ProjectProvider = ({ children }: { children: ReactNode }) => {

  const [ projectList, setProjectList ] = useState<IProject[]>(initialValue.projectList);

  return (
    <ProjectContext.Provider value={{ projectList, setProjectList}}>
      { children }
    </ProjectContext.Provider>
  );
};