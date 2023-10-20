import React from "react";
import { Link } from "react-router-dom";

const Alert = (props) => {
  return (
    <Link
      to={props.path}
      className={`block mb-4 p-0 ${props.className ? props.className : ""}`}
    >
      <div className="bg-primary-color text-white p-3 rounded-lg font-bold text-lg">
        <div className="flex items-center">
          {props.icon ? (
            <div className="pr-2">
              <i className="fa-solid fa-circle-info"></i>
            </div>
          ) : null}
          <div className="flex-1">
            <p className="inline-block">{props.children}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Alert;
