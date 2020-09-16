import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
// import axios from 'axios'

class App extends Component {
  state = {
    trips: [
      {
        id: 1,
        name: "Patrick Bald",
        place: "Paris",
        rating: 5,
        photo: "../public/images/paris.jpeg",
      },
      {
        id: 2,
        name: "Eleanor",
        place: "Rome",
        rating: 4,
        photo: "../public/images/rome.jpg",
      },
    ],
    trips2: [
      {
        id: 2,
        name: "test",
        place: "Rome",
        rating: 4,
        photo: "../public/images/rome.jpg",
      }
    ],
  };

  //this.state.filteredTrips = this.state.trips;
  filterState = (search) => {
    console.log(search);
    console.log("filter");
    const currentTrips = this.state.trips;
    const filteredTrips = currentTrips.filter(
      (trip) => trip.place.includes(search) || trip.name.includes(search)
    );
    //  currentTrips.forEach((trips) => console.log(trips.name, trips.place));
    //filteredTrips.append()
    //return filteredTrips;
    this.setState({ trips: filteredTrips });
    // this.setState({ filteredTrips: searchedTrips });

    //  console.log(search, currentTrips, filteredTrips);
  };

  componentDidMount(){
    console.log("trying to fetch");
    fetch("/src/trips.json")
      //.then(response => response.text())
      //.then(text => console.log(text))
      .then(response => response.json())
      .then(data => this.setState({
        trips2: data.trips
      }))
      console.log("exiting did mount");
  }


  render() {
    return (
      <div className="App">
        <Header branding="been there, done that" onSearch={this.filterState} />
        <br></br>
        <div className="container">
          <Feed trips_array={this.state.trips2}></Feed>
        </div>
      </div>
    );
  }
}

export default App;
