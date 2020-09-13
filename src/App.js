import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/Feed";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="been there, done that" />
      <br></br>
      <div className="container">
        <Feed></Feed>
      </div>
    </div>
  );
}

export default App;
