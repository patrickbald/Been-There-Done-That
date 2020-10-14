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

function PrivateRoute({ loginS, component: Component }) {
  console.log("in private route");
  console.log(loginS);
  console.log(Component);
  //return loginS == 1 ? <Route path="/" /> : <Component />;
  // return loginS == 1 ? <Redirect to="/" /> : <Route path="/" />;
  return loginS == 1 ? <Component /> : <Redirect to="/" />;

  //  return loginS == 1 ? <Redirect to="/" /> : <Component />;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      loginSuccess: 0,
    };
  }

  UpdateLogin = () => {
    console.log("updatelogin");
    this.setState({
      loginSuccess: 1,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/"
              exact
              component={Login}
              onLogin={this.UpdateLogin}
              loginS={this.state.loginSuccess}
            ></Route>
            <Route path="/signup" exact component={Register}></Route>
            <PrivateRoute
              path="/home"
              loginS={this.state.loginSuccess}
              exact
              component={Home}
            ></PrivateRoute>
            <PrivateRoute
              path="/profile"
              loginS={this.state.loginSuccess}
              exact
              component={Profile}
            ></PrivateRoute>
            <PrivateRoute
              path="/add"
              loginS={this.state.loginSuccess}
              exact
              component={Add}
            ></PrivateRoute>
            <PrivateRoute
              path="/plan"
              loginS={this.state.loginSuccess}
              exact
              component={Plan}
            ></PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
