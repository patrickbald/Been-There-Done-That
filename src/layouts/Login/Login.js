import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import axios from "axios";

function Login() {
  return (
    <div className="Login">
      <Header />
      <br></br>
      <div className="container">
        <h1>Plan</h1>
      </div>
    </div>
  );
}

export default Login;