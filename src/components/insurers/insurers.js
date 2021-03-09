import React from "react";
// icons
import AddIcon from "@material-ui/icons/Add";
// consts
import { Routes } from "../../routes/routes";
// styles
// components
import Header from "../header/Header";

const Insurer = () => {
  return (
    <>
      <Header
        wordKey={Routes.insurers.wordKey}
        description={Routes.insurers.description}
      />
      <div className="brand-container">
        <div className="icons-container">
          <div>
            <button className="buttons">
              <AddIcon fontSize="small" />
            </button>
            <button className="buttons">
              <AddIcon fontSize="small" />
            </button>
            <span style={{ color: "#707070" }}>1 registro</span>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </>
  );
};

export default Insurer;
