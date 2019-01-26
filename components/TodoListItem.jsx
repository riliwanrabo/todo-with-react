import React, { Component, Fragment } from "react";
import moment from "moment";
class TodoListItem extends Component {
  render() {
    const todos = this.props.entries;
    const todo_items = todos.map(this.createTodo);
    return <React.Fragment>{todo_items}</React.Fragment>;
  }

  createTodo = (todo, index) => {
    var doneClass = todo.completed ? "done" : "";
    return (
      <div className={"todolist__item__wrapper " + doneClass} key={index}>
        <div className="todolist__item">
          <span className="title">{todo.title}</span>
          <span className="info" />
        </div>
        <div className="todolist__item__actions">
          <button
            className="btn todolist__item__actions__button"
            onClick={() => this.props.markAsDone(index)}
          >
            <i className="icon ion-ios-done-all" />
          </button>
          <button
            className="btn todolist__item__actions__button"
            onClick={() => this.props.deleteTodo(todo.id)}
          >
            <i className="icon ion-ios-close" />
          </button>
        </div>
      </div>
    );
  };
}
export default TodoListItem;
