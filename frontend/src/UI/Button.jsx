const Button = (props) => {
  return (
    <button
      className={`w-fit py-2 px-5 bg-primary-color rounded-md outline-none text-white text-[15px] font-bold tracking-wider opacity-[0.75] cursor-pointer transition duration-700 hover:opacity-100 ${
        props.className || ""
      }`}
      style={props.style}
      type={props.type}
      onClick={props.onClick ? () => props.onClick() : () => {}}
      disabled={props.disabled || false}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;
