import React from "react";

import classes from "./Intro.module.css";

const Intro = (props) => {
  return (
    <div className={`${classes.intro} pe-5`}>
      <h1 className="mt-0 mb-4 font-weight-bold">{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default Intro;
