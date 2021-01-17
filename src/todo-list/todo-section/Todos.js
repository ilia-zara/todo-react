import "./Todos.css";
import Todo from "./todo/Todo.js";

const Todos = ({ allTodo }) => (
  <ul>
    {allTodo
      .map((todo) => (
        <li key={`li-${todo.id}`}>
          <Todo todo={todo} />
        </li>
      ))
      .reverse()}
  </ul>
);

export default Todos;
