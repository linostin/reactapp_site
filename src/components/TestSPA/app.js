import React from "react";
import "./css/app.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Maincontent from "./components/Maincontent/Maincontent";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
//import logo from "./../../img/logo_200x200.png";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      {/* <Maincontent />
      <Dialogs /> */}
      {/* <Route path="/Maincontent" component={Maincontent} />
      <Route path="/Dialogs" component={Dialogs} /> */}

      <Route path="/Maincontent" render= { () => <Maincontent /> }/>
      <Route path="/Dialogs" render= { () => <Dialogs DialogsPage={props.state.DialogsPage}/> } />
      <div>
        
      </div>
    </div>
  );
};

export default App;

