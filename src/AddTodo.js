import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.content === "") return false;
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <div className="AddTodo">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="AddTodo">Add new todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
