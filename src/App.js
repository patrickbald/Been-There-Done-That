import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/Feed";
import Header from "./components/Header";

class App extends Component {

  state = {
    trips: [
      {
          "id" : 1,
          "name" : "Patrick Bald",
          "place" : "Paris",
          "rating" : 5,
          "photo" : "/images/paris.jpeg"
      },
      {
          "id" : 2,
          "name" : "Eleanor",
          "place" : "Rome",
          "rating" : 4,
          "photo" : "/images/rome.jpg"
      }
    ]
  };

  render(){
    return (
      <div className="App">
        <Header branding="been there, done that" />
        <br></br>
        <div className="container">
          <Feed trips_array={this.state.trips}></Feed>
        </div>
      </div>
    );
  }
}

export default App;
