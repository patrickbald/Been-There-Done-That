import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import axios from "axios";

class App extends Component {
  state = {
    trips2: [],
    isLoading: true,
  };

  //this.state.filteredTrips = this.state.trips;
  filterState = (search) => {
    console.log(search);
    console.log("filter");
    const currentTrips = this.state.trips2;
    console.log(currentTrips);
    const filteredTrips = currentTrips.filter(
      (trip) => trip.location.includes(search) || trip.name.includes(search)
    );
    //  currentTrips.forEach((trips) => console.log(trips.name, trips.place));
    //filteredTrips.append()
    //return filteredTrips;
    this.setState({ trips2: filteredTrips });
    // this.setState({ filteredTrips: searchedTrips });

    //  console.log(search, currentTrips, filteredTrips);
  };

  componentDidMount() {
    console.log("component did mount enter");
    axios
      .get("trips.json")
      // .then(response => response.data)
      // .then(response => console.log(response.data.trips))
      .then((response) =>
        this.setState({
          trips2: response.data.trips,
          isLoading: false,
        })
      );
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={this.filterState} />
        <br></br>
        <div className="container">
          <Feed
            trips_array={this.state.trips2}
            loading={this.state.isLoading}
          ></Feed>
        </div>
      </div>
    );
  }
}

export default App;
