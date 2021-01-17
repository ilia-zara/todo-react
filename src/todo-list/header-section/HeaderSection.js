//import React from "react";
import "./HeaderSection.css";

const HeaderSection = ({ allTodoCount }) => (
  <div className="todo-list-header">
    <h2>My todos</h2>
    <h2>
      <span className="total-counter-text">Total todo count:</span>
      <span className="total-counter-number">{allTodoCount}</span>
    </h2>
  </div>
);

export default HeaderSection;
