import React, { Component } from "react";
import "../../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Parse from "parse";
import algoliasearch from 'algoliasearch';
import Trip from "../../components/Trip/Trip";

const searchClient = algoliasearch("0D2QURHTOH", "35140dd4e563460722777dbba81bfa75");
const index = searchClient.initIndex('Trips');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      rendered: [],
      isLoading: true,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  getData = () => {
    const Trip = new Parse.Object.extend("Trip");
    const query = new Parse.Query(Trip);
    query.include("TripUser"); // Points to User class
    query.include("TripDestination"); // points to Countries Class
    
    query.find().then((results) => {
      let trips = [];
      
      for (let i = 0; i < results.length; i++) {
        let trip = results[i];

        let trip_user = trip.get("TripUser").get("Name");
        let trip_name = trip.get("TripName");
        let trip_dest = trip.get("TripDestination").get("Name");
        let trip_rating = trip.get("TripRating");
        let trip_description = trip.get("Description");
        let trip_photo = trip.get("TripPhoto");

        trips.push({
          name: trip_name,
          user: trip_user,
          location: trip_dest,
          rating: trip_rating,
          comment: trip_description,
          photo: trip_photo
        });
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
    Parse.Cloud.run('indexData').then(response => {
      console.log(response);
      console.log("Done reindexing on mount");
    });
  }

  searchAlgolia = (text) => {
    if(!text){
      this.getData();
      return;
    }
    index.search(text).then(({hits}) => {
      console.log(hits);
      let trips = [];
      hits.forEach(hit => {
        console.log(hit.objectId);
        const Trip = new Parse.Object.extend("Trip");
        const query = new Parse.Query(Trip);
        query.include("TripUser"); // Points to User class
        query.include("TripDestination"); // points to Countries Class
        query.equalTo("objectId", hit.objectId);
        query.find().then((results) => {
          console.log("Get data results", results);
          console.log("Results length", results.length);
          
          for (let i = 0; i < results.length; i++) {
            let trip = results[i];

            let trip_user = trip.get("TripUser").get("Name");
            let trip_name = trip.get("TripName");
            let trip_dest = trip.get("TripDestination").get("Name");
            let trip_rating = trip.get("TripRating");
            let trip_description = trip.get("Description");
            let trip_photo = trip.get("TripPhoto");

            trips.push({
              name: trip_name,
              user: trip_user,
              location: trip_dest,
              rating: trip_rating,
              comment: trip_description,
              photo: trip_photo
            });
          }

          this.setState({
            rendered: trips,
          });
        });
      })
    });
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <br></br>
        <div className="container">

          <Search onSearch={this.searchAlgolia} />
          <br/>
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
