import Banner from 'components/Banner';
import React, { ReactElement } from 'react';
import styles from './About.module.scss';

const About = ():ReactElement => {

  const title = 'sobre.';
  const subtitle = 'Abaixo, temos um pouco da minha história e como entrei na programação.'
  const description = 'Sou consultor de seguros gerais, área em que atuo há quase 4 anos. Desde cedo, sou apaixonado pela inovação e por tecnologia. Por ter essa paixão pela tecnologia e pela inovação de processos, em todos os lugares em que já atuei, busquei aprender novos programas e por em prática novas formas de trabalhar para contribuir com a empresa. Após buscar aprender mais sobre a área de programação, iniciei os cursos HTML, CSS e JavaScript e hoje estou buscando minha primeira oportunidade na área da tecnologia. Sou muito comunicativo e interessado em aprender. Utilizo a minha curiosidade a meu favor, para atingir sempre mais conhecimento.';

  return (
    <main>
      <Banner title={title} subtitle={subtitle} description={description} />
      <section className={styles.aboutContainer}>
        <div>
          <h2>Detalhando...</h2>
          <p>Comecei minha carreira profissional aos 17 anos trabalhando no setor de escritório. Desde cedo sou apaixonado pela tecnologia e pela infinidade de oportunidade que ela nos concede.</p>
          <p>Trabalhei por 3 anos e meio no setor comercial de uma corretora de seguros, onde era responsável por toda tratativa de negociação e também pelo levantamento de dados controlados por uma planilha Excel. A partir deste primeiro contato com a tecnologia, comecei a desenvolver um sentimento de "dever cumprido" a cada clique economizado.</p>
          <p>Em 2021, ingressei em outra empresa, também no setor securitário, porém mais voltado para a parte operacional. Aqui, tive minha primeira grande conquista pessoal na automatização de tarefas repetitivas. Após ver alguns cursos na internet, consegui desenvolver um programa em Python, auxiliado das bilbiotecas pyWin32 e Pandas, que faz envio de e-mails complexos - com inserção de tabelas, por exemplo - para diversos endereços em somente alguns cliques. Obs: material está disponibilizado no meu GitHub: <a href='https://github.com/pedroalbertoveber' target='_blank' rel="noreferrer">https://github.com/pedroalbertoveber</a></p>
          <p>Trago isso como uma conquista pessoal, pois foi o meu primeiro projeto utilizando programação que saiu do papel e passou a ser funcional e eficiente, além de poupar horas da minha semana, tempo que agora pode ser utilizado para outras tarefas da empresa sem deixar nenhuma atividade de lado.</p>
          <p>2022 foi o ano em que me identifiquei com outra área, a qual já deveria ter percebido há muito tempo: Programação. Iniciei este ano focado em algo que me garantisse um futuro melhor e que também tenha espaço para crescimento pessoal e profissional. Sendo assim, desde Janeiro/2022 tenho estudado algumas tecnologias da programação web voltado para o Front-End, como HTML, CSS e JavaScript. Conforme o tempo foi passsando, percebi que criei afinidade com as tecnlogias aprendidas, e então parti para algo um pouco mais avançado, que foi quando fiz o curso de React (framework de JavaScript) e suas extensões - React-Router-Dom, Styled-Components, Axios, React-Icons, React-Toastify, entre outros.</p>
          <p>Programação é uma área que me motiva muito por ter a certeza de que é um mar que ainda tem muito há ser explorado e descoberto. Acredito que por ser uma área ligada diretamente à tecnologia, tende a crescer e demandar muito nos próximos anos.</p>
        </div>
      </section>
    </main>
  );
};

export default About;