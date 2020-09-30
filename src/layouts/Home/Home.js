import React, { Component } from "react";
//import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import axios from "axios";
import Parse from "parse";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      master: [],
      rendered: [],
      isLoading: true,
      name: "",
    };
    //  this.filterState = this.filterState.bind(this);
    this.getData = this.getData.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  getData = () => {
    const Trip = new Parse.Object.extend("Trip");
    const query = new Parse.Query(Trip);
    query.find().then((results) => {
      
      // for(let i = 0; i < results.length; i++){
      //   let o = results[i];
      //   console.log(o.get("TripUser"));
      // }

      console.log(JSON.stringify(results));



    })
    
  



    //let trip = new Parse.trip();
    // trip.set("name");
    // console.log("get data");
    // console.log(trip);
    /*console.log("axios");
    axios.get("trips.json").then((response) =>
      this.setState({
        master: response.data.trips,
        rendered: response.data.trips,
        isLoading: false,
      })
    );*/
  };

  componentDidMount() {
    console.log("component did mount enter");
    this.getData();
  }

  /* filterState = (search) => {
    console.log("filter");
    let allTrips = this.state.master;
    const filteredTrips = allTrips.filter(
      (trip) =>
        trip.location.toLowerCase().includes(search.toLowerCase()) ||
        trip.name.toLowerCase().includes(search.toLowerCase())
    );

    this.setState({ rendered: filteredTrips });
  };*/

  render() {
    return (
      <div className="Home">
        <Header /*onSearch={this.filterState}*/ />
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

export default Home;
