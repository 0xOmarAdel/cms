const Badge = ({ active, text, onClick }) => {
  return (
    <span
      className={`py-2 px-5 bg-sky-600 rounded-2xl text-white cursor-pointer transition duration-300 hover:bg-sky-800 ${
        active && "bg-sky-800"
      }`}
      onClick={onClick || (() => {})}
    >
      {text}
    </span>
  );
};

export default Badge;
