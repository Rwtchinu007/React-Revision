import React from "react";

const Button = (props) => {
  return (
    <button style={{  background: `linear-gradient(to right,${props.color}, #504b4b)`, borderColor: props.color }}>
      {props.status}
    </button>
  );
};

export default Button;
