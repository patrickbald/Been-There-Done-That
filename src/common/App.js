import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
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
  };

  componentDidMount() {
    console.log("component did mount enter");
    this.getData();
  }

  filterState = (search) => {
    console.log("filter");
    let allTrips = this.state.master;
    const filteredTrips = allTrips.filter(
      (trip) => trip.location.includes(search) || trip.name.includes(search)
    );

    this.setState({ rendered: filteredTrips });
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
