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
    };
  }

  getProfileData = () => {
    const currUser = new Parse.User.current();
    console.log(currUser);

    let name = currUser.get("Name");
    let username = currUser.get("username");
    let bio = currUser.get("Bio");
    let email = currUser.get("email");

    this.setState({
      Name: name,
      Username: username,
      Bio: bio,
      Email: email,
    });
  };

  componentDidMount() {
    this.getProfileData();
  }

  render() {
    const dest_email = "mailto:" + this.state.Email;

    return (
      <div className="Profile">
        <Header />
        <br></br>
        <h1 style={{ float: "left" }}>{this.state.Name}</h1>
        <br></br>

        <Row style={{ float: "left" }}>
          <Col xs={6} md={4}>
            <Image
              width={271}
              height={290}
              src="images/man.jpg"
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
                <ListGroup.Item style={{ height: "12rem" }}>
                  {this.state.Bio}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={6} md={4}></Col>
        </Row>

        <br></br>
        <br></br>
        <Button variant="primary" type="submit" href="/">
          Logout
        </Button>
      </div>
    );
  }
}

export default Profile;
