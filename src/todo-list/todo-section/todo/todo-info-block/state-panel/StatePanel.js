const StatePanel = ({ state }) => {
  const labels = {
    done: "I did it",
    "in-process": "I do it right now",
    postponed: "I'll do it later",
  };
  return (
    <p className="status-panel">
      <dt>Status:</dt>
      <dd>{labels[state]}</dd>
    </p>
  );
};

export default StatePanel;
