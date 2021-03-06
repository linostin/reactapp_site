import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
//import "./components/MemeGenerator/meme.css";
//import MemeMain from "./components/MemeGenerator/memeMain";
//import DataFrom from "./components/DataFromAPI/dataFromApi";
//import ReactForms from "./components/ReactForms/reactForms";
//import ReactFormsPractice from "./components/ReactForms/reactFormsPractice";
//import LifeCycleApp from "./components/ComponentLifecycle/LifeCycleApp";
//import RenderingApp from "./components/RenderingApp/RenderingApp";
//import LoginLogoutRendering from "./components/RenderingApp/LoginLogoutRendering"
//import {BrowserRouter} from "react-router-dom"
//import App from "./components/TestSPA/app";
//import {addPost} from "./components/TestSPA/components/Redux/state"
//import {RenderEntireTree} from "./render"
//import state from "./components/TestSPA/components/Redux/state"
//import {addPost} from "./components/TestSPA/components/Redux/state"
//import {updateNewPostText} from './components/TestSPA/components/Redux/state'
//import {subscribe} from './components/TestSPA/components/Redux/state'
import {BrowserRouter} from "react-router-dom"
import App from "./components/TestSPA/app";
import store from "./components/TestSPA/components/Redux/redux-store"

let RenderEntireTree= (state) => {
    ReactDOM.render(
        <BrowserRouter><App state={state} dispatch={store.dispatch.bind(store)}/></BrowserRouter>, document.getElementById("root")
        );
}

RenderEntireTree(store.getState());
store.subscribe = () => {
    let state = store.getState();
    RenderEntireTree(state);
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
