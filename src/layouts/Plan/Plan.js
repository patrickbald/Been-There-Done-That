import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import axios from "axios";

function Plan() {
  return (
    <div className="Plan">
      <Header />
      <br></br>
      <div className="container">
        <h1>Plan</h1>
      </div>
    </div>
  );
}

export default Plan;
