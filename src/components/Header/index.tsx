import React, { ReactElement, useState } from "react";
import { FiMenu } from 'react-icons/fi';
import styles from './Header.module.scss';
import InternalLinks from "../InternalLiks";
import SocialMedia from "../SocialMedia";

const Header = ():ReactElement => {

  const [ openMenu, setOpenMenu ] = useState<boolean>(false);

  return (
    <>
    <header className={styles.headerContainer}>
      <figure>
        <img src="assets/pictures/perfil.jpeg" alt="profile"/>
      </figure>
      <nav>
        <InternalLinks setOpenMenu={setOpenMenu}/>
        <SocialMedia style="header"/>       
      </nav>
      <div className={styles.toggleMenu} onClick={() => setOpenMenu(!openMenu)}>
          <FiMenu />
      </div>
    </header>
    {openMenu &&
      <nav className={styles.mobileMenu}>
        <InternalLinks linkStyle="mobile" setOpenMenu={setOpenMenu}/>
        <div className={styles.socialMediaContainer}>
          <SocialMedia style="header"/>
        </div>
      </nav>}
    </>
  );
};

export default Header;