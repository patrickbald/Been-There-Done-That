import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  handleFormInput = (event) => {
    console.log("handleFormInput");
    this.props.setInput(event);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handled");
    this.props.onAddTrip();
  };

  render() {
    return (
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              id="title"
              onChange={this.handleFormInput}
              type="text"
              placeholder="Title"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
          <Form.Label column sm={2}>
            Destination
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              id="destination"
              onChange={this.handleFormInput}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
          <Form.Label column sm={2}>
            Date
          </Form.Label>
          <Col sm={10}>
            <input onChange={this.handleFormInput} type="date" id="date" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              onChange={this.handleFormInput}
              type="text"
              placeholder="Description"
              id="description"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button onClick={this.handleFormSubmit} type="submit">
              Add Trip
            </Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

export default InputForm;
