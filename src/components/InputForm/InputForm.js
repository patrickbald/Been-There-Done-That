import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Parse from "parse";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destinations: [],
    };
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

  componentDidMount() {
    const countries = new Parse.Object.extend("Country");
    const query = new Parse.Query(countries);
    query.find().then((results) => {
      let options = [];
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        let dest = results[i];
        let dest_name = dest.get("Name");
        options.push(dest_name);
      }

      this.setState({
        destinations: options,
      });
    });
  }

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
              {this.state.destinations.map((name) => {
                return <option>{name}</option>;
              })}
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
