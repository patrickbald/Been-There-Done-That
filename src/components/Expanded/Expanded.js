import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { red } from "@material-ui/core/colors";
import Parse from "parse";
import Trip from "../Trip/Trip";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ListGroup from "react-bootstrap/ListGroup";

class Expanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      minimize: false,
      noButton: false,
    };
  }

  //check if a post has been liked
  onToggle = () => {
    this.setState({ liked: !this.state.liked });

    let objectId = this.props.trip.id;
    const Liked = Parse.Object.extend("Liked");
    const currTrip = Parse.Object.extend("Trip");
    const query = new Parse.Query(currTrip);
    query.get(objectId).then((object) => {
      let tripO = object;
      if (this.state.liked) {
        //create new liked object
        const myNewObject = new Liked();
        myNewObject.set("user", Parse.User.current());
        myNewObject.set("trip", tripO);
        myNewObject.save().then(
          (result) => {
            console.log("Liked created", result);
          },
          (error) => {
            console.error("Error while creating Liked: ", error);
          }
        );
      }

      //unlike post
      if (!this.state.liked) {
        console.log("unlike");
        const query2 = new Parse.Query(Liked);
        query2.include("user"); // Points to User class
        query2.include("trip"); // Points to Trip class
        query2.equalTo("user", Parse.User.current());
        query2.equalTo("trip", tripO);
        query2.find().then((object) => {
          let LikedId = object[0].id;
          query2.get(String(LikedId)).then((object2) => {
            object2.destroy().then(
              (response) => {
                console.log("Deleted Liked", response);
              },
              (error) => {
                console.error("Error while deleting Liked", error);
              }
            );
          });
        });
      }
    });
  };

  checkLiked = () => {
    let objectId = this.props.trip.id;

    const Liked = Parse.Object.extend("Liked");
    const currTrip = Parse.Object.extend("Trip");
    const query = new Parse.Query(currTrip);
    query.get(objectId).then((object) => {
      let tripO = object;
      const query2 = new Parse.Query(Liked);
      query2.include("user"); // Points to User class
      query2.include("trip"); // Points to Trip class
      query2.equalTo("user", Parse.User.current());
      query2.equalTo("trip", tripO);

      query2.find().then((results) => {
        for (let i = 0; i < results.length; i++) {
          console.log(results[i].className);
          if (results[i].className === "Liked") {
            console.log("Like found");
            this.setState({ liked: true });
          }
        }
      });
    });
  };

  componentDidMount() {
    this.checkLiked(); //make sure posts that have been liked are shown to be liked
    if (this.props.heart === true) {
      //if we are in viewing liked posts from profile, do not display like button
      this.setState({ noButton: true });
    }
  }

  minimizeCard = () => {
    this.setState({
      minimize: !this.state.minimize,
    });
  };

  render() {
    const {
      name,
      user,
      location,
      rating,
      comment,
      photo,
      photo2,
      attraction,
      restaurant,
      accommodation,
      activity,
    } = this.props.trip;

    return (
      <div className="trip">
        {this.state.minimize ? (
          <Trip trip={this.props.trip} heart={this.props.heart} />
        ) : (
          <div className="card mb-3" style={{ width: "100%", height: "70%" }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={`../../../images/${photo}`}
                  className="card-img-top"
                  alt="..."
                  width={300}
                  height={290}
                />

                <img
                  style={{ marginTop: "15px" }}
                  src={`../../../images/${photo2}`}
                  className="card-img-top"
                  alt="..."
                  width={300}
                  height={350}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p>{user}</p>
                  <p>{location}</p>
                  <Rating value={rating}></Rating>
                  <p>{comment}</p>
                </div>
                {this.state.noButton ? (
                  <div></div>
                ) : (
                  <IconButton id="button" onClick={this.onToggle}>
                    {this.state.liked ? (
                      <FavoriteIcon style={{ color: red[600] }} id="heart" />
                    ) : (
                      <FavoriteBorderIcon
                        style={{ color: red[200] }}
                        id="heart"
                      />
                    )}
                  </IconButton>
                )}
                <Button variant="link" onClick={this.minimizeCard}>
                  See Less
                </Button>
                <br></br>
                <div
                  style={{
                    marginBottom: "15px",
                    display: "inline-block",
                    textAlign: "center",
                    marginTop: "100px",
                  }}
                >
                  <Card bg="success" style={{ width: "25rem" }}>
                    <Card.Header>Top Recommendations</Card.Header>
                    <ListGroup bg="success">
                      <ListGroup.Item>
                        <div>
                          <b>Restaurant </b>
                        </div>{" "}
                        {restaurant}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <div>
                          <b>Attraction </b>
                        </div>
                        {attraction}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <div>
                          <b>Activity </b>
                        </div>{" "}
                        {activity}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <div>
                          <b>Accommodation </b>
                        </div>{" "}
                        {accommodation}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Expanded;
