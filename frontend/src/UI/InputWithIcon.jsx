import Input from "./Input";

const InputWithIcon = (props) => {
  return (
    <div className={`flex flex-row ${props.divClasses || ""}`}>
      <div className="p-3 bg-gray-200 rounded-tl-md rounded-bl-md text-gray-600">
        {props.icon}
      </div>
      <Input
        type={props.type}
        className={props.inputClasses}
        inputError={props.inputError}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default InputWithIcon;
