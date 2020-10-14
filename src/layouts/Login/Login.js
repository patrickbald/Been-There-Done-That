import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Parse from "parse";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameInput: null,
      passwordInput: null,
      loginSuccess: 0,
    };
    // this.onLogin = this.onLogin.bind(this);
  }

  handleFormInput = (e) => {
    const id = e.target.id;
    const target = e.target.value;
    this.setState({
      [id]: target,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    //this.props.onLogin();

    console.log("submit");
    Parse.User.logIn(this.state.usernameInput, this.state.passwordInput)
      .then((user) => {
        console.log(user.get("username"));
        console.log(user);
        this.setState({ loginSuccess: 1 });
        console.log("this.props.onLogin", this.props.onLogin);
        console.log(this.props);
        // want to update logged in in App
        this.props.onLogin();
      })
      .catch((error) => {
        alert(error.message);
        console.log("Error: " + error.code + " " + error.message);
      });
  };

  render() {
    if (this.state.loginSuccess === 1) {
      console.log("success");
      //this.props.onLogin();
      return <Redirect to="/home" />;
    }

    return (
      <div className="Login">
        <br></br>
        <h2> been there, done that </h2>

        <br></br>
        <div className="container">
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Enter username"
                id="usernameInput"
                onChange={this.handleFormInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="passwordInput"
                onChange={this.handleFormInput}
              />
            </Form.Group>

            <Button onClick={this.handleLogin} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <br></br>
          <div>
            <p>
              Don't have an account? <a href="/signup">Register</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
