const Input = (props) => {
  return <input {...props} className={`form-control ${props.className || ""}`} />;
};

export default Input;
