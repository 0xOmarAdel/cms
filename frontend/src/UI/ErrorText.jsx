const ErrorText = ({ text, className }) => {
  return <p className={`text-sm text-red-700 ${className || ""}`}>{text}</p>;
};

export default ErrorText;
