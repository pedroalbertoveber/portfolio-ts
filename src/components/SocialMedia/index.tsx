import React, { ReactElement } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styles from './SocialMedia.module.scss';

interface Props {
  style: "header" | "contact",
}

const SocialMedia = ({ style }: Props): ReactElement => {
  
  return (
    <ul className={`${styles.socialMedia} ${style === 'contact' && styles.contact}`}>
          <li>
            <a href="https://github.com/pedroalbertoveber" target={'_blank'} rel="noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/pedro.veber.3" target={'_blank'} rel="noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pedro-alberto-veber-berna-a367551ba/" target={'_blank'} rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pedroveber_/"  target={'_blank'} rel="noreferrer">
              <FaInstagram />
            </a>
          </li>
        </ul>
  );
};

export default SocialMedia;