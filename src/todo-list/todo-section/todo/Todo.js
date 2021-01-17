import "./Todo.css";
import TodoText from "./todo-text/TodoText.js";
import TodoInfoBlock from "./todo-info-block/TodoInfoBlock.js";
import TodoButtons from "./todo-buttons/TodoButtons.js";

const Todo = ({ todo }) => (
  <div className="Item">
    <TodoText text={todo.text} />
    <TodoInfoBlock
      state={todo.state}
      dateCreated={todo.dateCreated}
      dateCompleted={todo.dateCompleted}
    />
    <TodoButtons />
  </div>
);

export default Todo;
