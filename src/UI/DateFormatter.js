const DateFormatter = (props) => {
  const date = new Date(props.date);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const isToday = date.toDateString() === today.toDateString();
  const isYesterday = date.toDateString() === yesterday.toDateString();

  let formattedDate = "";

  formattedDate = isToday
    ? `Today at ${date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      })}`
    : isYesterday
    ? `Yesterday at ${date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      })}`
    : date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

  return formattedDate;
};
export default DateFormatter;
