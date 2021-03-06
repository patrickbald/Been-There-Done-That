import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  render() {
    return (
      <Navbar bg="light" className="navbar">
        <Navbar.Brand href="/home">been there, done that</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/plan">Plan Trip</Nav.Link>
          <Nav.Link href="/add">Add Trip</Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <a href="/profile" className="navbar-brand">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-person-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
              <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fill-rule="evenodd"
                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
              />
            </svg>
          </a>
        </Nav>
      </Navbar>
    );
  }
}

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
