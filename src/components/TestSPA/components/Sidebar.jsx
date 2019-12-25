import React from "react";
import "./../css/app.css";

const Sidebar = () => {
  return (
    <sidebar className="sidebar">
      <nav className="sidebarnav">
        <div>Main</div>
        <div>Profile</div>
        <div>Messages</div>
      </nav>
    </sidebar>
  );
};

export default Sidebar;
