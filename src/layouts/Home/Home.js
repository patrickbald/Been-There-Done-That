import React, { Component } from "react";
import "../../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Parse from "parse";
import { InstantSearch, SearchBox } from 'react-instantSearch';

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
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        let trip = results[i];

        let trip_user = trip.get("TripUser").get("Name");
        let trip_name = trip.get("TripName");
        let trip_dest = trip.get("TripDestination").get("Name");
        let trip_rating = trip.get("TripRating");
        let trip_description = trip.get("Description");
        let trip_photo = trip.get("TripPhoto");
        console.log("trip photo: " + trip_photo);


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

  // Algolia Functionality

  reindexAlgoliaData = () => {
    const algoliasearch = require('algoliasearch');
    const client = algoliasearch('0D2QURHTOH', '35140dd4e563460722777dbba81bfa75');
    const index = client.initIndex('prod_been_there_done_that');

    let objectsToIndex = [];

    const trip_query = new Parse.Query('Trip');
    trip_query.find({
      success(trips) {
        // prepare objects to index 
        objectsToIndex = trips.map(trip => {
          // convert to regular key/value JavaScript object
          trip = trip.toJSON();
          // Specify Algolia's objectID with the Parse.Object unique ID
          trip.objectID = trip.objectId;
          return trip;
        });
        index.replaceAllObjects(objectsToIndex, { safe: true }).then(() => {
          console.log('Done re-indexing Trip data');
        });
      },
      error(err) {
        throw err;
      }
    })

    objectsToIndex = [];
    const usr_query = new Parse.Query('User');
    usr_query.find({
      success(users) {
        objectsToIndex = users.map(usr => {
          usr = usr.toJSON();
          usr.objectID = usr.objectId;
          return usr;
        });
        index.replaceAllObjects(objectsToIndex, { safe: true }).then(() => {
          console.log('Done re-indexing User data');
        });
      },
      error(err) {
        throw err;
      }
    })

    objectsToIndex = [];
    const cntry_query = new Parse.Query('Country');
    cntry_query.find({
      success(cntrys) {
        objectsToIndex = cntrys.map(c => {
          c = c.toJSON();
          c.objectID = c.objectId;
          return c;
        });
        index.replaceAllObjects(objectsToIndex, { safe: true }).then(() => {
          console.log('Done re-indexing Country data');
        });
      },
      error(err) {
        throw err;
      }
    })

  }

  updateAlgoliaData = () => {
    const algoliasearch = require('algoliasearch');
    const client = algoliasearch('0D2QURHTOH', '35140dd4e563460722777dbba81bfa75');
    const index = client.initIndex('prod_been_there_done_that');

    Parse.Cloud.afterSave('Trip', ({object}) => {
      // Convert Parse.Object to JSON
      const objectToSave = object.toJSON();
      // Specify Algolia's objectID with the Parse.Object unique ID
      objectToSave.objectID = objectToSave.objectId;
      // Add or update object
      index.saveObject(objectToSave).then(() => {
        console.log('Parse<>Algolia object saved');
      });
    });
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <br></br>
        <div className="container">
          <InstantSearch indexName="prod_been_there_done_that" searchClient={searchClient} >
            <SearchBox searchAsYouType={true}/>
          </InstantSearch>
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
