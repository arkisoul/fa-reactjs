import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.name = "App Component";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>{this.name}</h2>
          {false ? <span>Hello</span> : <div>World</div>}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.functionDef}>Click Me!</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React and it is a fun UI lib
          </a>
        </header>
      </div>
    );
  }
}

/* function App() {
  const name = 'App Component';
  return (
    <div className="App">
      <header className="App-header">
        <h2>{name}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and it is a fun UI lib
        </a>
      </header>
    </div>
  );
} */

export default App;
