import React, { Component } from "react";

import TodoListItem from "./TodoListItem.jsx";

class TodoList extends Component {
  render() {
    const formStyle = {};

    const formControl = {
      boxSizing: "border-box",
      width: "100%",
      left: 0,
      border: 0,
      height: "45px",
      borderBottom: "1px solid #09f",
      paddingLeft: "1rem",
      marginBottom: "2rem",
      outline: 0
    };
    return (
      <React.Fragment>
        <form onSubmit={this.props.addItem}>
          <input
            type="text"
            ref={this.props.inputElement}
            style={formControl}
            placeholder="Enter item here"
            onChange={this.props.handleInput}
          />
        </form>
        <div className="todolist__items">
          <TodoListItem
            entries={this.props.entries}
            deleteTodo={this.props.deleteTodo}
            markAsDone={this.props.markAsDone}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TodoList;
