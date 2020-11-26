import "core-js/es/map";
import "core-js/es/set";
import "raf/polyfill";
import React, { Component } from "react";
import { render } from "react-dom";
import Dashboard from "./Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <Dashboard />;
  }
}

render(<App />, document.getElementById("root"));
