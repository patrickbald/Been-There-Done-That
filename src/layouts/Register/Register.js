import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Parse from "parse";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      usernameInput: null,
      passwordInput: null,
      emailInput: null,
      nameInput: null,
      bioInput: null,
      registerSuccess: 0,
    };
  }

  handleFormInput = (e) => {
    console.log("handling");
    const id = e.target.id;
    const target = e.target.value;

    this.setState({
      [id]: target,
    });
  };

  handleRegister = (e) => {
    e.preventDefault();
    // Create a new instance of the user class
    var user = new Parse.User();
    user.set("username", this.state.usernameInput);
    user.set("password", this.state.passwordInput);
    user.set("email", this.state.emailInput);
    user.set("Name", this.state.nameInput);
    user
      .signUp()
      .then((user) => {
        console.log(
          "User created successful with name: " +
            user.get("username") +
            " and email: " +
            user.get("email")
        );
        this.setState({ registerSuccess: 1 });
      })
      //catch errors
      .catch((error) => {
        alert(error.message);
        console.log("Error: " + error.code + " " + error.message);
      });
  };

  render() {
    if (this.state.registerSuccess === 1) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="Register">
        <br></br>
        <h2> been there, done that </h2>
        <br></br>
        <div className="container">
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                onChange={this.handleFormInput}
                id="nameInput"
              />
            </Form.Group>

            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Enter username"
                onChange={this.handleFormInput}
                id="usernameInput"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="emailInput"
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

            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Bio
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Bio..."
                  id="bioInput"
                  onChange={this.handleFormInput}
                />
              </Col>
            </Form.Group>

            <Button
              onClick={this.handleRegister}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <br></br>
          <div>
            <p>
              Already have an account? <a href="/">Login</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
