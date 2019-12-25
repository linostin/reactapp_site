import React from "react";
import "./app.css";
import logo from "./../../img/logo_200x200.png";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src={logo} alt="Smiley face"></img>
      </header>

      <sidebar className="sidebar">
        <nav className="sidebarnav">
          <div>Main</div>
          <div>Profile</div>
          <div>Messages</div>
        </nav>
      </sidebar>

      <content className="maincontent">
        <div>Main content</div>
      </content>
    </div>
  );
};

export default App;
