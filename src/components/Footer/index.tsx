import InternalLinks from "components/InternalLiks";
import React, { ReactElement } from "react";
import styles from './Footer.module.scss';

const Footer = (): ReactElement => {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <span>&copy;2022 - Pedro Alberto</span>
      </div>
      <nav>
        <InternalLinks linkStyle="footer"/>
      </nav>
    </footer>
  )
};

export default Footer;