import React, { Component } from "react";
import "../../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Parse from "parse";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      rendered: [],
      isLoading: true,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  //load all trip data from Parse
  getData = () => {
    const Trip = new Parse.Object.extend("Trip");
    const query = new Parse.Query(Trip);
    query.include("TripUser"); // Points to User class
    query.include("TripDestination"); // points to Countries Class

    query.find().then((results) => {
      let trips = [];
      let arr = [];

      console.log(results);
      for (let i = 0; i < results.length; i++) {
        let trip = results[i];
        let trip_user = trip.get("TripUser").get("Name");
        let trip_name = trip.get("TripName");
        let trip_dest = trip.get("TripDestination").get("Name");
        let trip_rating = trip.get("TripRating");
        let trip_description = trip.get("Description");
        let trip_photo = trip.get("TripPhoto");
        let trip_photo2 = trip.get("TripPhoto2");
        let trip_id = trip.id;
        let trip_restaurant = trip.get("Restaurant");
        let trip_accommodation = trip.get("Accommodation");
        let trip_attraction = trip.get("Attraction");
        let trip_activity = trip.get("Activity");

        trips.push({
          name: trip_name,
          user: trip_user,
          location: trip_dest,
          rating: trip_rating,
          comment: trip_description,
          photo: trip_photo,
          id: trip_id,
          restaurant: trip_restaurant,
          accommodation: trip_accommodation,
          attraction: trip_attraction,
          activity: trip_activity,
          photo2: trip_photo2,
        });
        //  }
      }

      this.setState({
        rendered: trips,
        isLoading: false,
      });
    });
  };

  componentDidMount() {
    console.log("component did mount enter");
    this.getData();
  }

  filter = (search) => {
    const title = new Parse.Query("Trip");
    title.fullText("TripName", search);
    title.find().then((results) => {
      let trips = [];
      console.log(results);

      for (let i = 0; i < results.length; i++) {
        let trip = results[i];

        let trip_user = trip.get("TripUser").get("Name");
        let trip_name = trip.get("TripName");
        let trip_dest = trip.get("TripDestination").get("Name");
        let trip_rating = trip.get("TripRating");
        let trip_description = trip.get("Description");
        let trip_photo = trip.get("TripPhoto");
        let trip_id = trip.id;

        trips.push({
          name: trip_name,
          user: trip_user,
          location: trip_dest,
          rating: trip_rating,
          comment: trip_description,
          photo: trip_photo,
          id: trip_id,
        });
      }

      this.setState({
        rendered: trips,
        isLoading: false,
      });
    });
  };

  render() {
    return (
      <div className="Home">
        <Header />
        <br></br>
        <div className="container">
          <Search onSearch={this.filter} />
          <br />
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
