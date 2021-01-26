import React from "react";
import "./TodoInfoBlock.css";
import StatePanel from "./state-panel/StatePanel.js";
import DateTimePanel from "./date-time-panel/DateTimePanel.js";

const TodoInfoBlock = ({ state, dateCreated, dateCompleted }) => (
  <div className="info-block">
    <StatePanel state={state} />
    <DateTimePanel title="Created" dateTime={dateCreated} />
    <DateTimePanel title="Completed" dataTime={dateCompleted} />
  </div>
);

export default TodoInfoBlock;
