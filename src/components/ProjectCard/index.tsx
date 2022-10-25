import React, { ReactElement } from 'react';
import { IProject } from 'interface/Project';
import styles from './ProjectCard.module.scss';

const ProjectCard = (props: IProject): ReactElement => {

  const selectedProject = {...props};

  if (selectedProject.language === 'Jupyter Notebook') {
    selectedProject.language = 'python';
  }

  const handleRedirect = () => {
    window.location.href = selectedProject.html_url;
  }

  return (
    <div className={styles.cardContainer} onClick={handleRedirect}>
      <div className={styles.title}>
        <h3>{selectedProject.name}</h3>
      </div>
      <div className={styles.description}>
        <span>{selectedProject.description}</span>
      </div>
      <div className={styles.language}>
        <span>Linguagem utilizada:</span>
        <img src={`assets/icons/${selectedProject.language}.png`} alt={selectedProject.language} />
      </div>
    </div>
  );
};

export default ProjectCard;