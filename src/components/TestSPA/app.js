import React from "react";
import "./css/app.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Maincontent from "./components/Maincontent/Maincontent";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom"
//import logo from "./../../img/logo_200x200.png";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Maincontent />
      <Dialogs />
      <Route path="/Maincontent" component={Maincontent} />
      <Route path="/Dialogs" component={Dialogs} />
      <div>
        
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;

