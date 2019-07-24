import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import MySite from "./components/Template";
import { fetchWebContent } from "./actions/webdata";

// Use normalize to have same styling format across cross browser

//import 'bootstrap/dist/css/bootstrap.min.css';
//https://reactstrap.github.io/

import "normalize.css/normalize.css";
import "./styles/styles.scss";

//https://www.tymandrews.com/just-for-fun/
//http://www.pascalvangemert.nl/#/profile
//https://dribbble.com/hopereagan
//https://www.joshuamccartney.com/
//http://ellensriley.com/
//https://www.devonstank.com/
//https://www.themuse.com/advice/the-16-best-personal-websites-of-2016

const store = configureStore();
//const state = store.getState();

store.dispatch(fetchWebContent()).then(() => {
  ReactDOM.render(<MySite store={store} />, document.getElementById("app"));
});

//ReactDOM.render( <LoadingScreen /> , document.getElementById("app") );
