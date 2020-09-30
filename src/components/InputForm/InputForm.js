import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class InputForm extends Component {
  constructor() {
    super();

    this.state = {
      title: null,
      description: null,
      date: null,
      destination: null,
    };
  }

  handleFormInput = (event) => {
    const id = event.target.id;
    const target = event.target.value;
    this.setState({
      [id]: target,
    });
    console.log(this.state);
  };

  handleFormSubmit = () => {
    this.props.onAddTrip(this.state);
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
              inputtitle={this.state.title}
              onChange={this.handleFormInput.bind(this)}
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
              inputdest={this.state.destination}
              onChange={this.handleFormInput.bind(this)}
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
            <input
              inputdate={this.state.date}
              onChange={this.handleFormInput.bind(this)}
              type="date"
              id="date"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              inputdescription={this.state.description}
              onChange={this.handleFormInput.bind(this)}
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
