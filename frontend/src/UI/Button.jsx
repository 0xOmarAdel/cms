import React from "react";

const Button = (props) => {
  return (
    <button
      className={`btn-primary ${props.className}`}
      style={props.style}
      type={props.type}
      onClick={props.onClick ? () => props.onClick() : () => {}}
      disabled={props.disabled ? props.disabled : false}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;
