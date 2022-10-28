import Banner from 'components/Banner';
import SocialMedia from 'components/SocialMedia';
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import React, { ReactElement } from 'react';
import styles from './Contact.module.scss';

const Contact = (): ReactElement => {

  const title = 'contato.'
  const subtitle = 'Entre em contato comigo nas plataformas abaixo'

  return (
    <section>
      <Banner title={title} subtitle={subtitle} />
      <div className={styles.infoContainer}>
        <h4>Abaixo estão as as minhas redes sociais:</h4>
      </div>
      <div className={styles.contactContainer}>
        <ul>
          <li>
            <FaWhatsapp />
            <span>+55 54 999859934</span>
          </li>
          <li>
            <MdOutlineAlternateEmail />
            <span>pedro.veber@outlook.com</span>
          </li>
        </ul>
      </div>
      <div className={styles.mediaContainer}>
        <SocialMedia style='contact'/>
      </div>
    </section>
  );
};

export default Contact;