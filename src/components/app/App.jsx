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

class AppComponent extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <LayoutMain isAuthenticated={this.props.isAuthenticated}>
        <Routes>
          {this.props.isAuthenticated ? (
            <React.Fragment>
              <Route path="/todos/:todoId" element={<TodoDetails />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/logout" element={<Logout />} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </React.Fragment>
          )}
          <Route path="/" element={<h1>Home Component</h1>} />
          <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>
      </LayoutMain>
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// const mapDispatchToProps = (dispatch) => ({
//   dispatch: dispatch,
// });

const connectedApp = connect(mapStateToProps, null);
const App = connectedApp(AppComponent);
export default App;
