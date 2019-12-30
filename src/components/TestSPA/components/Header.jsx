import React from "react";
import styles from "./../css/Header.module.css";
import logo from "./../img/logo_200x200.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Smiley face"></img>
    </header>
  );
};

export default Header;
