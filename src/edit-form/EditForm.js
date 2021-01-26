import React from "react";
import "./EditForm.css";
import TodoForm from "./todo-form/TodoForm.js";

const EditForm = (props) => (
  <div className="edit-form-container">
    <h2>Create your todo</h2>
    <div className="edit-form">
      <TodoForm onCreateTodo={props.onCreateTodo} />
    </div>
  </div>
);

export default EditForm;
