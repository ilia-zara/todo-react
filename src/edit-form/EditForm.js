import React from "react";
import "./EditForm.css";
import TodoForm from "./todo-form/TodoForm.js";

const EditForm = (props) => (
  <React.Fragment>
    <h1>Create your todo</h1>;
    <div className="Editor-form">
      <TodoForm onCreateTodo={props.onCreateTodo} />
    </div>
  </React.Fragment>
);

export default EditForm;
