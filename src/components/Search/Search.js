import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  handleSearchInput = (event) => {
    console.log(event.target.value);
    let keyword = event.target.value;
    this.setState({ search: keyword });
    // this.props.onSearch(this.state.search);

  };

  handleSearchSubmit = () => {
    this.props.onSearch(this.state.search);
  };

  render() {
    return (
      <Form inline>
        <FormControl
          onChange={this.handleSearchInput.bind(this)}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button onClick={this.handleSearchSubmit} variant="outline-success">
          Search
        </Button>
      </Form>
    );
  }
}

export default Search;
