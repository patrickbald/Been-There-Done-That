import React, { Component } from "react";
import Trip from "./Trip";

class Feed extends Component {

  render() {

    console.log(this.props);
    //const { trips, loading } = this.props;

    return (
      <React.Fragment>
         {!this.props.loading ? ( this.props.trips_array.map((trip) => {
                return (
                    <div>
                        <Trip trip={trip}></Trip>
                    </div>
                );
            })
            ) : (
                <h1>loading...</h1>
            )
        }
      </React.Fragment>
    );
  }
}

// Feed.defaultProps = {
//     trips: [],
//     isLoading: true
// }

export default Feed;
