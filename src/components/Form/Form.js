import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Form extends Component {
  render() {
    const { id, name, location, rating, comment } = this.props.trip;

    return (
      <div className="trip">
        <div className="card mb-3" style={{ width: "100%", height: "70%" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="" class="card-img-top" alt="..." />
              {/*<img src={require(`${photo}`)} class="card-img-top" alt="..." />*/}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{location}</h5>
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

export default Header;
