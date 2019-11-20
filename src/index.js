import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
//import LifeCycleApp from "./components/ComponentLifecycle/LifeCycleApp";
import RenderingApp from "./components/RenderingApp/RenderingApp";

ReactDOM.render(<RenderingApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
