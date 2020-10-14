import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Home from "./layouts/Home/Home";
import Profile from "./layouts/Profile/Profile";
import Add from "./layouts/Add/Add";
import Plan from "./layouts/Plan/Plan";
import Login from "./layouts/Login/Login";
import Register from "./layouts/Register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Parse from "parse";
import * as Env from "./environments";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function PrivateRoute({ component: Component }) {
  let currentUser = Parse.User.current();
  console.log(currentUser);
  return currentUser ? <Component /> : <Redirect to="/" />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/signup" exact component={Register}></Route>
          <PrivateRoute path="/home" exact component={Home}></PrivateRoute>
          <PrivateRoute
            path="/profile"
            exact
            component={Profile}
          ></PrivateRoute>
          <PrivateRoute path="/add" exact component={Add}></PrivateRoute>
          <PrivateRoute path="/plan" exact component={Plan}></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
