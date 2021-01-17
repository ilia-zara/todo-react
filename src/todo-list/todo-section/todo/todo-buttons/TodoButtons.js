import "./TodoButtons.css";
import Button from "../../../../button/Button.js";

const TodoButtons = () => (
  <div className="control-block">
    <Button name="View" className="view-button" />
    <Button name="Postponed" className="postpone-button" />
    <Button name="Done" className="done-button" />
    <Button name="Delete" className="delete-button" />
  </div>
);

export default TodoButtons;
