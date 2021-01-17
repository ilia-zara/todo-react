function FormattedDate({ dateTime }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateTime);
  const formatDate = date.toLocaleString("ru-RU", options);

  return formatDate;
}

export default FormattedDate;
