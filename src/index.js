import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./components/MemeGenerator/meme.css";
import MemeMain from "./components/MemeGenerator/memeMain";

//import DataFrom from "./components/DataFromAPI/dataFromApi";
//import ReactForms from "./components/ReactForms/reactForms";
//import ReactFormsPractice from "./components/ReactForms/reactFormsPractice";
//import LifeCycleApp from "./components/ComponentLifecycle/LifeCycleApp";
//import RenderingApp from "./components/RenderingApp/RenderingApp";
//import LoginLogoutRendering from "./components/RenderingApp/LoginLogoutRendering"

ReactDOM.render(<MemeMain />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
