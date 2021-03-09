import React from "react";
// icons
import AddIcon from "@material-ui/icons/Add";
// consts
import { Routes } from "../../routes/routes";
// styles
import "./brands.css";
// components
import Header from "../header/Header";
import XGridDemo from "../utils/grid/Xgrid";

const Brand = () => {
  return (
    <>
      <Header
        wordKey={Routes.brands.wordKey}
        description={Routes.brands.description}
      />
      <div className="brand-container">
        <XGridDemo />
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

export default Brand;