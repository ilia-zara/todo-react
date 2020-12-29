import React from "react";
import "./TodoList.css";

const TodoList = () => (
  <React.Fragment>
    <h1>My Todos</h1>
    <h2>Total todo count: 0</h2>
    <a href="#" className="Link-statistic">
      Show statistic
    </a>
    <p className="Empty-list">Nothing to do</p>
  </React.Fragment>
);

export default TodoList;
