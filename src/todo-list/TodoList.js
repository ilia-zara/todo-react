import React from "react";
import "./TodoList.css";
import HeaderSection from "./header-section/HeaderSection.js";
import Statistic from "./statistic-section/Statistic.js";
import Todos from "./todo-section/Todos.js";

function TodoList({ allTodo }) {
  const allTodoCounter = allTodo.length;

  const EmptyList = ({ allTodoCounter }) =>
    allTodoCounter === null ? (
      <div className="empty-list">Nothing to do</div>
    ) : null;

  return (
    <React.Fragment>
      <HeaderSection allTodoCount={allTodoCounter} />
      <Statistic />
      <EmptyList />
      <Todos allTodo={allTodo} />
    </React.Fragment>
  );
}

export default TodoList;
