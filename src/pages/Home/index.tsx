import React, { ReactElement } from "react";
import { TbWorld } from 'react-icons/tb';
import { FaWhatsapp } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import styles from './Home.module.scss';

const Home = ():ReactElement => {
  return (
    <main className={styles.mainContainer}>
      <figure>
        <figcaption>
          <div className={styles.title}>
            <h2>{'<Front-End Developer />'}</h2>
            <ul>
              <li><img src="assets/icons/html.png" alt="linguagem html" /></li>
              <li><img src="assets/icons/css.png" alt="linguagem css" /></li>
              <li><img src="assets/icons/javascript.png" alt="linguagem js" /></li>
              <li><img src="assets/icons/typescript.png" alt="linguagem ts" /></li>
              <li><img src="assets/icons/python.png" alt="linguagem python" /></li>
              <li><img src="assets/icons/react.png" alt="linguagem react" /></li>
            </ul>
          </div>
          <div className={styles.description}>
            <div>
              <TbWorld />
              <span>https://github.com/PedroAlbertoVeber</span>
            </div>
            <div>
              <GoMail />
              <span>pedro.veber@outlook.com</span>
            </div>
            <div>
              <FaWhatsapp />
              <span>+55 54 999859934</span>
            </div>
          </div>
        </figcaption>
      </figure>
    </main>
  );
};

export default Home