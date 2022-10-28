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
            <a href="#">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
        </ul>
  );
};

export default SocialMedia;