import React, { ReactElement } from "react";
import styles from './InternalLinks.module.scss';

interface Props {
  linkStyle?: 'mobile' | 'footer',
}

const InternalLinks = ({ linkStyle }: Props):ReactElement => {
  return (
    <ul className={linkStyle ? styles[linkStyle] : styles.internalLinks}>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Portfólio</a></li>
      <li><a href="#">Experiências</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  );
};

export default InternalLinks;