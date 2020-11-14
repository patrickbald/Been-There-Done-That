import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Parse from "parse";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      Name: null,
      Bio: null,
      Username: null,
      Email: null,
      Photo: null,
      Liked: null,
      heart: true, //pass down to trip component to indicate that there should be no liked button displayed
      rendered: [],
      isLoading: true,
    };
  }

  getProfileData = () => {
    const currUser = new Parse.User.current();
    console.log(currUser);

    let name = currUser.get("Name");
    let username = currUser.get("username");
    let bio = currUser.get("Bio");
    let email = currUser.get("email");
    let photo = currUser.get("Photo");
    let liked = currUser.get("Liked");
    console.log("photo " + photo);

    this.setState({
      Name: name,
      Username: username,
      Bio: bio,
      Email: email,
      Photo: photo,
      Liked: liked,
    });
  };

  //get Liked data using query for username in Liked class and use that to populate trips array
  getData = () => {
    const Liked = new Parse.Object.extend("Liked");
    const query = new Parse.Query(Liked);
    query.includeAll();
    query.equalTo("user", Parse.User.current());
    query.find().then((results) => {
      let trips = [];

      for (let i = 0; i < results.length; i++) {
        let trip = results[i];
        let trip_name = trip.get("trip").get("TripName");
        let trip_attraction = trip.get("trip").get("Attraction");
        let trip_accommodation = trip.get("trip").get("Accommodation");
        let trip_restaurant = trip.get("trip").get("Restaurant");
        let trip_activity = trip.get("trip").get("Activity");
        let trip_rating = trip.get("trip").get("TripRating");
        let trip_description = trip.get("trip").get("Description");
        let trip_photo = trip.get("trip").get("TripPhoto");
        let trip_photo2 = trip.get("trip").get("TripPhoto2");

        trips.push({
          name: trip_name,
          rating: trip_rating,
          comment: trip_description,
          photo: trip_photo,
          photo2: trip_photo2,
          attraction: trip_attraction,
          activity: trip_activity,
          accommodation: trip_accommodation,
          restaurant: trip_restaurant,
        });
      }

      this.setState({
        rendered: trips,
        isLoading: false,
      });
    });
  };

  componentDidMount() {
    this.getProfileData();
    this.getData();
  }

  ButtonLogout = () => {
    Parse.User.logOut();
  };

  render() {
    const dest_email = "mailto:" + this.state.Email;

    return (
      <div className="Profile">
        <Header />
        <br></br>
        <div>
          <h1
            style={{
              float: "left",
              marginLeft: "30px",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            {this.state.Name}
          </h1>
          <Button
            style={{
              float: "right",
              marginRight: "30px",
              marginTop: "50px",
            }}
            variant="primary"
            type="submit"
            href="/"
            onClick={this.ButtonLogout}
          >
            Logout
          </Button>
        </div>
        <br></br>

        <Row style={{ float: "left" }}>
          <Col xs={6} md={4}>
            <Image
              width={271}
              height={290}
              src={`../../../images/${this.state.Photo}`}
              roundedCircle
            />
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "45rem" }}>
              <Card.Header className="font-weight-bold">
                {this.state.Username}
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <p>Contact Info: </p>{" "}
                  <a href={dest_email}>{this.state.Email}</a>
                </ListGroup.Item>
                <ListGroup.Item style={{ height: "10rem" }}>
                  {this.state.Bio}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={6} md={4}></Col>
        </Row>

        <h3
          style={{
            marginLeft: "50px",
            marginTop: "450px",
            textAlign: "left",
            clear: "both",
          }}
        >
          Liked Posts
        </h3>
        <br></br>
        <Feed
          trips_array={this.state.rendered}
          loading={this.state.isLoading}
          heart={this.state.heart}
        ></Feed>
      </div>
    );
  }
}

export default Profile;
