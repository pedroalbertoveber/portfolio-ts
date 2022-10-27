import Banner from 'components/Banner';
import React, { ReactElement } from 'react';
import experienceList from 'data/experiences.json';
import styles from './Experiences.module.scss';
import ExperienceCard from './ExperienceCard';

const Experiences = ():ReactElement => {

  const experiences = [ ...experienceList ];

  const title = 'experiências.'
  const subtitle = 'Algumas de minhas experiências profissionais'
  const description = 'Sou consultor de seguros gerais, área em que atuo há quase 4 anos. Desde cedo, sou apaixonado pela inovação e por tecnologia. Por ter essa paixão pela tecnologia e pela inovação de processos, em todos os lugares em que já atuei, busquei aprender novos programas e por em prática novas formas de trabalhar para contribuir com a empresa. Após buscar aprender mais sobre a área de   programação, iniciei os cursos HTML, CSS e JavaScript e hoje estou buscando minha primeira oportunidade na área da tecnologia. Sou muito comunicativo e interessado em aprender. Utilizo a minha curiosidade a meu favor, para atingir sempre mais conhecimento.';

  return (
    <section>
      <Banner title={title} subtitle={subtitle} description={description} />
      <div className={styles.title}>
        <h2>Empresas onde pude contribuir</h2>
      </div>
      <div className={styles.experiencesContainer}>
        {experiences.map(item => <ExperienceCard {...item} key={item.id} />)}
      </div>
    </section>
  );
};

export default Experiences;