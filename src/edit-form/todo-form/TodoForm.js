import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.count = 1;

    this.state = { todoDiscription: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({ todoDiscription: event.target.value });
  }

  handleClear(event) {
    this.setState({ todoDiscription: "" });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ todoDiscription: "" });
    const newId = 9 + this.count++;

    const todo = {
      text: this.state.todoDiscription,
      state: "in-process",
      dateCreated: Date().toString(),
      dateCompleted: null,
      id: newId,
    };

    this.props.onCreateTodo(todo);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-text">
          <input
            id="todo-text"
            type="text"
            placeholder="Enter your todo"
            name="todoDiscription"
            value={this.state.todoDiscription}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-button">
          <input value="Add" className="add-button" type="submit" />
          <input
            value="Clear"
            className="clear-button"
            type="button"
            onClick={this.handleClear}
          />
        </div>
      </form>
    );
  }
}

export default TodoForm;
