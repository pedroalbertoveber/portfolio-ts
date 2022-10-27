import React, { ReactElement } from 'react';
import { IExperience } from 'interface/Experience';
import styles from './ExperienceCard.module.scss'; 

const ExperienceCard = (props: IExperience): ReactElement => {

  const { company, currentJob, job, description, year } = props;
  const { joined, quit } = year;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContainer__title}>
        <h2>{company}</h2>
      </div>
      <div className={styles.cardContainer__description}>
        <span>{ job }</span>
        <p>{ description }</p>
      </div>
      <div className={styles.cardContainer__time}>
        <span>{ joined } - { currentJob ? 'Trabalho atual': quit }</span>  
      </div>
    </div>
  );
};

export default ExperienceCard;