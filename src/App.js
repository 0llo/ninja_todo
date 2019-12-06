import React, { Component } from "react";
import Todos from "./Todos";
//import "./style.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some mil" },
      { id: 2, content: "play mario kart" }
    ]
  };
  deleteTodo = id => {
    console.log(id);
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
