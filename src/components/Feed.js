import React, { Component } from "react";
import Trip from "./Trip";

class Feed extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.trips_array.map((trip) => {
          return <Trip trip={trip}></Trip>;
        })}
      </React.Fragment>
    );
  }
}

export default Feed;
