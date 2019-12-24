import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route} from "react-router-dom";
import OneZero from "./OneZero";
import Coment from "./Coment"
import Detail from "./Detail"


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/one_zero/:id" component={OneZero} />
      <Route exact path="/Coment" component={Coment} />
      <Route exact path="/Detail" component={Detail} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
