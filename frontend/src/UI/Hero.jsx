import React from "react";

const Hero = (props) => {
  return (
    <div className="hero text-center">
      <h1 className="heading my-4">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Hero;
