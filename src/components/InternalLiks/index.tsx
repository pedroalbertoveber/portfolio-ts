import React, { ReactElement } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './InternalLinks.module.scss';

interface Props {
  linkStyle?: 'mobile' | 'footer',
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>,
}

const InternalLinks = ({ linkStyle, setOpenMenu }: Props):ReactElement => {

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if(setOpenMenu) {
      setOpenMenu!(false);
    }    
    navigate(path);
  };

  return (
    <ul className={linkStyle ? styles[linkStyle] : styles.internalLinks}>
      <li onClick={() => handleNavigate('/sobre')}><span>Sobre</span></li>
      <li onClick={() => handleNavigate('/portfolio')}><span>Portfólio</span></li>
      <li onClick={() => handleNavigate('/experiencias')}><span>Experiências</span></li>
      <li onClick={() => handleNavigate('/contato')}><span>Contato</span></li>
    </ul>
  );
};

export default InternalLinks;