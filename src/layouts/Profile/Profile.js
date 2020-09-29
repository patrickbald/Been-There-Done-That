import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  return (
    <div className="Profile">
      <Header />
      <br></br>
      <div className="container">
        <h1>Christopher Collard</h1>
        <Row>
          <Col xs={6} md={4}>
            <Image
              width={271}
              height={290}
              src="images/pfp.jpg"
              roundedCircle
            />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" thumbnail />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Profile;
