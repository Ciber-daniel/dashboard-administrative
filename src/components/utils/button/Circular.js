import React from "react";
// styles
import "./circular.css";

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
        {props.text.includes("brokers") ? (
          <span
            style={{ fontSize: "0.56rem", width: "7rem" }}
            className="tiptext"
          >
            {props.text}
          </span>
        ) : (
          <span className="tiptext">{props.text}</span>
        )}
      </div>
    </div>
  );
};
