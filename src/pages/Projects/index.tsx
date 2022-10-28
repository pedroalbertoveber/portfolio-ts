import React, { ReactElement, useEffect, useContext, useState } from "react";
import { ProjectContext } from "common/ProjectsContext";
import { handleFilterList } from "services/api";
import Banner from "../../components/Banner";
import styles from './Projects.module.scss';
import ProjectCard from "components/ProjectCard";
import Filter from "./Filter";
import { IFilter } from "interface/Filter";
import GoBack from "components/GoBack";

const Projects = (): ReactElement => {

  const { projectList, setProjectList } = useContext(ProjectContext);
  const [ filter, setFilter ] = useState<IFilter>({ id: 'All', displayName: 'Todos'});
  const [ loading, setLoading ] = useState<boolean>(true);

  const handleSearch = async () => {
    const projects = await handleFilterList('repos');
    
    filter.id === 'All'
    ? setProjectList(projects.filter(item => item.id !== 553184544 && item.id !== 556304565))
    : setProjectList(projects.filter(item => item.id !== 553184544 && item.id !== 556304565 && item.language === filter.id))
  };

  useEffect(() => {
    setLoading(true);

    handleSearch();
    setLoading(false);
  }, [filter, handleSearch]);

  const title = 'portfólio.';
  const subtitle = 'Confira alguns dos meus últimos trabalhos como desenvolvedor de front-end.';
  const description = 'Todos os projetos foram feitos para por em prática conhecimentos que adquiri ao longo do tempo que tenho estudado. Alguns são projetos desenvolvidos em cursos da Alura | Udemy.';

  return (
    <main>
      <GoBack />
      <Banner title={title} subtitle={subtitle} description={description}/>
      <Filter filter={filter} setFilter={setFilter} />
      { loading ? 
        <div className={styles.loadingContainer}>
          <span className={styles.loading}></span>
        </div>
        :
        <section className={styles.projectsContainer}>
          {projectList.map(item => <ProjectCard {...item} key={item.id}/>)}
        </section>}

    </main>
  );
};

export default Projects;