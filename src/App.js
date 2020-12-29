import React from "react";
import "./App.css";
import EditForm from "./edit-form/EditForm.js";
import TodoList from "./todo-list/TodoList.js";
import Todo from "./todo/Todo.js";

function App() {
  return (
    <React.Fragment>
      <div className="App-container">
        <EditForm />
        <TodoList />
        <Todo />
      </div>
    </React.Fragment>
  );
}

export default App;
