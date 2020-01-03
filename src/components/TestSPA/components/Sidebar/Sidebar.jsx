import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <sidebar className={styles.sidebar}>
      <nav className={styles.sidebarnav}>
        <div>Main</div>
        <div>Profile</div>
        <div>Messages</div>
      </nav>
    </sidebar>
  );
};

export default Sidebar;
