import React, { ReactElement, useState } from "react";
import { FiMenu } from 'react-icons/fi';
import styles from './Header.module.scss';
import InternalLinks from "../InternalLiks";
import SocialMedia from "./SocialMedia";

const Header = ():ReactElement => {

  const [ openMenu, setOpenMenu ] = useState<boolean>(false);

  return (
    <>
    <header className={styles.headerContainer}>
      <figure>
        <img src="assets/pictures/perfil.jpeg"/>
      </figure>
      <nav>
        <InternalLinks setOpenMenu={setOpenMenu}/>
        <SocialMedia />       
      </nav>
      <div className={styles.toggleMenu} onClick={() => setOpenMenu(!openMenu)}>
          <FiMenu />
      </div>
    </header>
    {openMenu &&
      <nav className={styles.mobileMenu}>
        <InternalLinks linkStyle="mobile" setOpenMenu={setOpenMenu}/>
        <div className={styles.socialMediaContainer}>
          <SocialMedia />
        </div>
      </nav>}
    </>
  );
};

export default Header;