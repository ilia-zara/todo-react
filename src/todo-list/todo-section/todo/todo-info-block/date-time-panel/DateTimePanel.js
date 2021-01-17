import FormattedDate from "./formatted-date/FormattedDate.js";

const DateTimePanel = ({ title, dateTime }) =>
  dateTime === null ? null : (
    <p className="date-time-panel">
      <dt>{title}</dt>
      <dd>
        <FormattedDate dateTime={dateTime} />
      </dd>
    </p>
  );

export default DateTimePanel;
