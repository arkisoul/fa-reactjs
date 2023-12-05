import React from "react";

export class AddTodo extends React.Component {
  constructor() {
    // console.log("constructor");
    super();
    this.state = {
      title: "",
    };
    this.body = null;
    this.intervalId = null;
    this.titleRef = React.createRef();
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps", props, state);
  //   return {
  //     title: "title from static method",
  //     today: new Date(),
  //   };
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log("getSnapshotBeforeUpdate");
  // }

  // componentDidMount() {
  //   this.body = document.getElementById("body");
  //   this.body.addEventListener("scroll", (event) => {
  //     console.log("scroll event");
  //   });
  //   console.log("componentDidMount");
  //   setInterval(() => {}, 1000);
  // }

  // componentWillUnmount() {
  //   this.body.removeEventListener("scroll", () => {});
  //   console.log("componentWillUnmount");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props, nextState, nextProps, this.state);
  //   console.log("shouldComponentUpdate");
  //   return this.state.title !== nextState.title;
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  handleFormSubmit = (e) => {
    e.preventDefault();
    // const title = document.getElementById("title");
    // console.log(title.value);
    // console.log(
    //   this.titleRef.current,
    //   this.titleRef.current.value,
    //   this.state.title
    // );
    this.props.onAddTodo(this.state.title);
    this.setState({
      title: "",
    });
  };

  handleTitleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    return (
      <form action="">
        <div className="form-group">
          <label htmlFor="title" className="sr-only">
            Todo Title
          </label>
          <input
            type="text"
            placeholder="What would you like to do today?"
            id="title"
            ref={this.titleRef}
            value={this.state.title}
            onChange={this.handleTitleChange}
            className="form-control"
          />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.handleFormSubmit}
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}
