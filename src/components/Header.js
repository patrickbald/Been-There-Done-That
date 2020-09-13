import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
      <div className="container">
        <a href="/" className="navbar-brand">
          Plan a Trip
        </a>
      </div>
      <div className="container">
        <a href="/" className="navbar-brand">
          <i class="plus circle">hi</i>
        </a>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
