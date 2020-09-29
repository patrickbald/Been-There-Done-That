import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import axios from "axios";

function Add() {
  return (
    <div className="Add">
      <Header />
      <br></br>
      <div className="container">
        <h1>Add</h1>
      </div>
    </div>
  );
}

export default Add;
