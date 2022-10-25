import React, { ReactElement, useEffect, useContext } from "react";
import { ProjectContext } from "common/ProjectsContext";
import { search } from "services/api";
import Banner from "../../components/Banner";
import styles from './Projects.module.scss';
import ProjectCard from "components/ProjectCard";

const Projects = (): ReactElement => {

  const { projectList, setProjectList } = useContext(ProjectContext);

  useEffect(() => {
    search('repos', setProjectList);
  }, [ setProjectList, projectList]);

  const title = 'portfólio.';
  const subtitle = 'Confira alguns dos meus últimos trabalhos como desenvolvedor de front-end.';
  const description = 'Todos os projetos foram feitos para por em prática conhecimentos que adquiri ao longo do tempo que tenho estudado. Alguns são projetos desenvolvidos em cursos da Alura | Udemy.';

  return (
    <main>
      <Banner title={title} subtitle={subtitle} description={description}/>
      <section className={styles.projectsContainer}>
        {projectList.map(item => <ProjectCard {...item} key={item.id}/>)}
      </section>
    </main>
  );
};

export default Projects;