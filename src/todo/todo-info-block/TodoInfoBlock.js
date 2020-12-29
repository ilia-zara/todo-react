const TodoInfoBlock = ({ value, date }) => (
  <div className="Info-block">
    <p>Task {value}</p>
    <p>Created: {date}</p>
  </div>
);

export default TodoInfoBlock;
