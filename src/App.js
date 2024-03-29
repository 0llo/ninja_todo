import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
//import "./style.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some mil" },
      { id: 2, content: "play mario kart" }
    ]
  };
  addTodo = todo => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
