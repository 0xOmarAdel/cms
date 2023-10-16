import React from "react";

import "./ScrollableDiv.css";

const ScrollableDiv = (props) => {
  return (
    <div
      className={
        props.className ? "scrollableDiv " + props.className : "scrollableDiv"
      }
      style={props.style ? props.style : ""}
    >
      {props.children}
    </div>
  );
};

export default ScrollableDiv;
