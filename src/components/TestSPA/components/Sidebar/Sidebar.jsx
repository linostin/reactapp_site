import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <sidebar className={styles.sidebar}>
      <nav className={styles.sidebarnav}>
        <div>Main</div>
        <div><NavLink to ="/MyPosts">MyPosts</NavLink></div>
        <div><NavLink to ="/Maincontent">Maincontent</NavLink></div>
        <div><NavLink to ="/Dialogs">Messages</NavLink></div>
      </nav>
    </sidebar>
  );
};

export default Sidebar;
