import React from "react";
import "./App.css";
import EditForm from "./edit-form/EditForm.js";
import TodoList from "./todo-list/TodoList.js";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: props.allTodo };

    this.handleCreateTodo = this.handleCreateTodo.bind(this);
  }

  handleCreateTodo(todo) {
    const newTodos = [...this.state.todos, todo];
    this.setState({ todos: newTodos });
  }

  render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <EditForm onCreateTodo={this.handleCreateTodo} />
        <TodoList allTodo={todos} />
      </React.Fragment>
    );
  }
}

export default TodoApp;
