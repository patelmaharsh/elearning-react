import React, { Component } from "react";
import "./App.css";
import ElearningComponent from "./components/ElearningComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <ElearningComponent />
      </div>
    );
  }
}

export default App;
