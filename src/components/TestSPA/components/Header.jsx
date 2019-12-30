import React from "react";
import "./../css/Header.css";
import logo from "./../img/logo_200x200.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Smiley face"></img>
    </header>
  );
};

export default Header;
