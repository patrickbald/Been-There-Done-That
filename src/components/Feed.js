import React, { Component } from "react";
import Trip from "./Trip";

class Feed extends Component {
  render() {

    const { trips } = this.props.trips_array;

    return (
      <React.Fragment>
        {trips.map((trip) => {
          return <Trip trip={trip}></Trip>;
        })}
      </React.Fragment>
    );
  }
}

export default Feed;
