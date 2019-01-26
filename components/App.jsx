import React, { Component } from "react";
import TodoList from "./TodoList.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [{ id: 1, title: "Wash The Plates", completed: false }],
      currentItem: {
        id: null,
        title: null,
        completed: false
      }
    };

    this.inputElement = React.createRef();
  }
  render() {
    return (
      <div className="todolist__wrapper">
        <div className="todolist__header">
          <div className="todolist__header__info">
            <div className="todolist__info__all" />
            <div className="todolist__info__pending" />
            <div className="todolist__info__completed">
              {this.completedItems()}
            </div>
          </div>
        </div>

        <div className="todolist__body">
          <TodoList
            inputElement={this.inputElement}
            entries={this.state.items}
            addItem={this.addItem}
            handleInput={this.handleInput}
            deleteTodo={this.deleteTodo}
            markAsDone={this.markAsDone}
          />
        </div>

        <div className="todolist__footer" />
      </div>
    );
  }

  completedItems() {
    const completed = this.state.items.filter(item => {
      return item.completed === true;
    });
    return completed.length;
  }

  addItem = e => {
    e.preventDefault();
    const new_item = this.state.currentItem;
    new_item.id = this.state.items.length + 1;
    if (new_item.title != "") {
      const items = [...this.state.items, new_item];

      this.setState({
        items,
        currentItem: {
          id: null,
          title: "",
          completed: false
        }
      });
      this.inputElement.current.value = "";
      this.inputElement.current.focus();
    }
  };
  deleteTodo = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.id !== key;
    });

    this.setState({ items: filteredItems });
  };
  markAsDone = index => {
    let todo = this.state.items[index];
    this.state.items.splice(index, 1);
    todo.completed = !todo.completed;
    let items = [...this.state.items, todo];
    this.setState({
      items
    });
  };
  handleInput = e => {
    e.preventDefault();
    const { currentItem } = this.state;
    currentItem.title = e.target.value;
    this.setState({
      currentItem
    });
  };
}

export default App;
