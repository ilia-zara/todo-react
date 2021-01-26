import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [todoDescription, setTodoDescription] = useState("");
  const [count, setCount] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    setTodoDescription("");
    setCount(count + 1);

    const todo = {
      text: todoDescription,
      state: "in-process",
      dateCreated: Date().toString(),
      dateCompleted: null,
      id: 9 + count,
    };

    props.onCreateTodo(todo);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="input-text">
        <input
          id="todo-text"
          type="text"
          placeholder="Enter your todo"
          name="todoDiscription"
          value={todoDescription}
          onChange={(event) => setTodoDescription(event.target.value)}
        />
      </div>
      <div className="form-button">
        <input value="Add" className="add-button" type="submit" />
        <input
          value="Clear"
          className="clear-button"
          type="button"
          onClick={(event) => setTodoDescription("")}
        />
      </div>
    </form>
  );
};

export default TodoForm;
