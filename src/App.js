import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/Feed";
import Header from "./components/Header";

class App extends Component {

  state = {
    trips: [
      {
          "name" : "Patrick Bald",
          "Location" : "Paris",
          "Rating" : 5
      },
      {
          "name" : "Eleanor",
          "Location" : "Rome",
          "Rating" : 4.5
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
