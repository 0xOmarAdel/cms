const ErrorText = ({ text, className }) => {
  return <p className={`error-text ${className || ""}`}>{text}</p>;
};

export default ErrorText;
