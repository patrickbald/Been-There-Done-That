import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";

class Trip extends Component {
  render() {
    const { name, user, location, rating, comment } = this.props.trip; // removed id

    return (
      <div className="trip">
        <div className="card mb-3" style={{ width: "100%", height: "70%" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="" className="card-img-top" alt="..." />
              {/*<img src={require(`${photo}`)} class="card-img-top" alt="..." />*/}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{location}</h5>
                <p>{user}</p>
                <p>{name}</p>
                <Rating value={rating}></Rating>
                <p>{comment}</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trip;
