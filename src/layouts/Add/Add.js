import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header/Header";
import InputForm from "../../components/InputForm/InputForm";
import Parse from "parse";

class Add extends Component {
  constructor() {
    super();

    this.state = {
      title: null,
      description: null,
      date: null,
      destination: null,
    };
    // this.setInput = this.setInput.bind(this);
  }

  setInput = (event) => {
    const id = event.target.id;
    const target = event.target.value;
    this.setState({
      [id]: target,
    });
    console.log(this.state);
  };

  submitForm = () => {
    console.log("submit");
    let id = "";

    console.log(this.state.destination);

    const Country = new Parse.Object.extend("Country");
    const query = new Parse.Query(Country);
    query.equalTo("Name", String(this.state.destintation));
    query.find().then((result) => {
      console.log(this.state.destination);
      console.log(result);
      //  console.log(result.get("Country").get("objectId"));
      // id = test.get("Country").get("objectId");
      //console.log("id");
      // console.log(id);
    });

    //console.log(id);

    const Trip = Parse.Object.extend("Trip");
    const newTrip = new Trip();
    newTrip.set("TripName", this.state.title);
    newTrip.set("Date", this.state.date);
    /*newTrip.set(
      "TripDestination",
      new Parse.Object("Country").set("Name", this.state.destination)
    );*/
    newTrip.set("TripDestination", id);
    newTrip.set("Description", this.state.description);
    newTrip.set("TripUser", new Parse.Object("User"));
    console.log(newTrip);
    newTrip.save().then(
      (result) => {
        console.log("NEW");
      },
      (error) => {
        console.log("ERROR");
      }
    );
  };

  render() {
    return (
      <div>
        <Header />
        <br></br>
        <div className="container">
          <h1>Add New Trip</h1>
          <InputForm
            setInput={this.setInput}
            onAddTrip={this.submitForm}
          ></InputForm>
        </div>
      </div>
    );
  }
}

export default Add;
