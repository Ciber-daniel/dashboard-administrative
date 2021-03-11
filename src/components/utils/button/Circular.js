import React from "react";
// styles
import "./Circular.css";

export const CircularButton = (props) => {
  return (
    <>
      <div>
        <div
          className="buttons"
          onClick={() => {
            props.callback();
          }}
        >
          <img src={props.icon} alt="Agregar marca" />
        </div>
      </div>
    </>
  );
};
