import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import axios from "axios";

class App extends Component {
  state = {
    master: [],
    rendered: [],
    isLoading: true,
  };

  getData = () => {
    console.log("axios");
    axios.get("trips.json").then((response) =>
      this.setState({
        master: response.data.trips,
        rendered: response.data.trips,
        isLoading: false,
      })
    );
    //.then((response) => response.data);
    // .then(response => console.log(response.data.trips))
  };

  componentDidMount() {
    console.log("component did mount enter");
    /*axios
      .get("trips.json")
      // .then(response => response.data)
      // .then(response => console.log(response.data.trips))
      .then((response) =>
        this.setState({
          trips2: response.data.trips,
          isLoading: false,
        })
      );*/
    /*this.getData().then((response) =>
      this.setState({
        trips2: response.data.trips,
        isLoading: false,
      })
    );*/
    this.getData();
  }

  filterState = (search) => {
    console.log("filter");
    // this.getData();
    let allTrips = this.state.master;

    const filteredTrips = allTrips.filter(
      (trip) => trip.location.includes(search) || trip.name.includes(search)
    );

    console.log("filtered trips:");
    console.log(filteredTrips);
    this.setState({ rendered: filteredTrips });

    console.log(search, allTrips, filteredTrips);
    //this.getData();
  };

  render() {
    return (
      <div className="App">
        <Header onSearch={this.filterState} />
        <br></br>
        <div className="container">
          <Feed
            trips_array={this.state.rendered}
            loading={this.state.isLoading}
          ></Feed>
        </div>
      </div>
    );
  }
}

export default App;
