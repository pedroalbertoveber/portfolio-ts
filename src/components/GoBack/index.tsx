import React, { ReactElement } from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import styles from './GoBack.module.scss';

const GoBack = (): ReactElement => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div onClick={() => navigate('/')}>
        <RiArrowGoBackFill />
        Voltar para Home
      </div>
    </div>
  );
};

export default GoBack;