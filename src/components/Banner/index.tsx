import React, { ReactElement } from "react";
import styles from './Banner.module.scss';

interface Props {
  title: string,
  subtitle: string,
  description?: string,
}

const Banner = ({ title, subtitle, description }: Props): ReactElement => {
  return (
    <section className={styles.bannerContainer}>
      <div>
        <h2>{title}</h2>
        <span>{subtitle}</span>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Banner;