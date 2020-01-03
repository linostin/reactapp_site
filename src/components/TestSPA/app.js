import React from "react";
import "./css/app.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Maincontent from "./components/Maincontent/Maincontent";
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

