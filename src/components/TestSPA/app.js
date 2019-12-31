import React from "react";
import "./css/app.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";
//import logo from "./../../img/logo_200x200.png";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Maincontent />
      <div>
        
      </div>
    </div>
  );
};

export default App;

