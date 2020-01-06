import React from "react";
import "./css/app.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Maincontent from "./components/Maincontent/Maincontent";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom"
//import logo from "./../../img/logo_200x200.png";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      {/* <Maincontent />
      <Dialogs /> */}
      {/* <Route path="/Maincontent" component={Maincontent} />
      <Route path="/Dialogs" component={Dialogs} /> */}

      <Route path="/Maincontent" render= { () => <Maincontent /> }/>
      <Route path="/Dialogs" render= { () => <Dialogs DialogsData={props.state.DialogsPage.DialogsData} MessagesData={props.state.DialogsPage.MessagesData}/> } />
      <div>
        
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;

