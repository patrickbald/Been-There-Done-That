import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";

function Trip(props){
    // console.log(this.hit);
    const { name, user, location, rating, comment, photo } = props.trip; // removed id
    // console.log("photo src: " + photo);
    // console.log("name: " + name);

  return (
    <div className="trip">
      <div className="card mb-3" style={{ width: "100%", height: "70%" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={`../../../images/${photo}`} className="card-img-top" alt="..."  width={271} height={290}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p>{user}</p>
              <p>{location}</p>
              <Rating value={rating}></Rating>
              <p>{comment}</p>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Trip;
