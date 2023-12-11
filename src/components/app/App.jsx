import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { LayoutMain } from "../layout/LayoutMain";
import { TodoDetails } from "../todo-details/TodoDetails";
import Todos from "../todos/Todos";
import { Login } from "../auth/login/Login";
import { Register } from "../auth/register/Register";
import { Logout } from "../auth/logout/Logout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <LayoutMain>
            <Routes>
              <Route path="/todos/:todoId" element={<TodoDetails />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/" element={<h1>Home Component</h1>} />
              <Route path="*" element={<h1>404 Page</h1>} />
            </Routes>
          </LayoutMain>
        </div>
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
