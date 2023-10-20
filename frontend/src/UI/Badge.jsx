const Badge = ({ active, text, onClick }) => {
  return (
    <span
      className={`badge ${active && "active"}`}
      onClick={onClick ? onClick : () => {}}
    >
      {text}
    </span>
  );
};

export default Badge;
