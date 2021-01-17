import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./App.js";
import TodoStorage from "./todo-storage/TodoStorage.js";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp allTodo={TodoStorage} />
  </React.StrictMode>,
  document.getElementById("root")
);
