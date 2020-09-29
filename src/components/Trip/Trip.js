import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";

class Trip extends Component {
  render() {
    const { id, name, location, rating, comment } = this.props.trip;

    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Trip;
