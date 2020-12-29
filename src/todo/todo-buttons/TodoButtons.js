import Button from "../../button/Button.js";

const TodoButtons = () => (
  <div className="Control-block">
    <Button name="View" />
    <Button name="Postponed" />
    <Button name="Done" />
    <Button name="Delete" />
  </div>
);

export default TodoButtons;
