import React, { Component } from "react";
import Todos from "../todos/Todos";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.name = "App Component";
    this.state = {
      name: "App Component",
      version: "1.0.0",
    };
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handlePropertyUpdate = this.handlePropertyUpdate.bind(this);
  }

  handlePropertyUpdate() {
    this.name = "Updated name";
  }

  handleNameUpdate() {
    this.setState({ name: "App updated name" });
  }

  render() {
    return (
      <div className="App">
        <p>{this.name}</p>
        <p>{this.state.name}</p>
        <p>{this.state.version}</p>
        <button onClick={this.handlePropertyUpdate}>
          Update class property
        </button>
        <button onClick={this.handleNameUpdate}>Update name state</button>
        <Todos />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Todos />
//     </div>
//   );
// }

export default App;
