import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

function Profile() {
  return (
    <div className="Profile">
      <Header />
      <br></br>
      <div className="container">
        <h1 style={{ float: "left" }}>Christopher Collard</h1>
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
              <Card.Header className="font-weight-bold">@ccoll</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Most recent trip: Tokyo, Japan</ListGroup.Item>
                <ListGroup.Item style={{ height: "12rem" }}>
                  grew up in Portland, currently living in London, love
                  photography
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={6} md={4}></Col>
        </Row>
        <br></br>
      </div>
    </div>
  );
}

export default Profile;
