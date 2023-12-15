import React, { Component, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { LayoutMain } from "../layout/LayoutMain";
import { Logout } from "../auth/logout/Logout";
import "./App.css";

const Login = lazy(() => import("../auth/login/Login"));
const Register = lazy(() => import("../auth/register/Register"));
const TodoDetails = lazy(() => import("../todo-details/TodoDetails"));
const Todos = lazy(() => import("../todos/Todos"));

class AppComponent extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <LayoutMain isAuthenticated={this.props.isAuthenticated}>
        <Suspense fallback={<h1>Loading...</h1>}>
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
        </Suspense>
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
// const App = connect(mapStateToProps, null)(AppComponent);
export default App;
