import "./Todo.css";
import TodoText from "./todo-text/TodoText.js";
import TodoInfoBlock from "./todo-info-block/TodoInfoBlock.js";
import TodoButtons from "./todo-buttons/TodoButtons.js";

const Todo = () => (
  <div className="Item">
    <TodoText text="Some text in todo" />
    <TodoInfoBlock value="in progress" date={new Date().toLocaleDateString()} />
    <TodoButtons />
  </div>
);

export default Todo;
