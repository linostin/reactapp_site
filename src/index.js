import React from "react";
import ReactDOM from "react-dom";
import App from "./1stLessonCatsCards/App";
import * as serviceWorker from "./serviceWorker";
import "./components/css/index.css";
import AppJoke from "./components/JokesMapArray/AppJoke";
import AppClassState from "./components/ClassState/AppClassState";
import StateChanges from "./components/ClassState/StateChanges";
import AppChangeState from "./components/ChangeState/AppChangeState";

ReactDOM.render(<AppChangeState />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
