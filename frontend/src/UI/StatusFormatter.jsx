import React from "react";

const StatusFormatter = ({ status }) => {
  let st;

  if (parseInt(status) === 0) {
    st = "Pending";
  } else if (parseInt(status) === 1) {
    st = "Closed";
  }
  return st;
};

export default StatusFormatter;
