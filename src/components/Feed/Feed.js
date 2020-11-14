import React, { Component } from "react";
import Trip from "../Trip/Trip";

class Feed extends Component {
  render() {
    return (
      <React.Fragment>
        {!this.props.loading ? (
          this.props.trips_array.map((trip) => {
            return (
              <div>
                <Trip trip={trip} heart={this.props.heart}></Trip>
              </div>
            );
          })
        ) : (
          <h1>loading...</h1>
        )}
      </React.Fragment>
    );
  }
}

export default Feed;
