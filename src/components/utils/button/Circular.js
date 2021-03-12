import React from "react";
// styles
import "./Circular.css";

export const CircularButton = (props) => {
  return (
    <div className="tooltip bottom">
      <div
        className="buttons"
        onClick={() => {
          props.setOpen(true);
        }}
      >
        <img src={props.icon} alt="Agregar marca" />
        <span className="tiptext">{props.text}</span>
      </div>
    </div>
  );
};
