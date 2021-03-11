import React from "react";
// icons
import AddIcon from "@material-ui/icons/Add";
// consts
import { Routes } from "../../routes/routes";
// styles
import "./brands.css";
// components
import Header from "../header/Header";
// utils
import { Modals } from "../utils/modals/Modals";
import XGridDemo from "../utils/grid/Xgrid";
import CustomButton from "../utils/button/Button";

const Brand = () => {
  const titles = ["Tipo de bien", "Nombre"];
  const data = [
    {
      id: "1",
      type: "Computadora",
      name: "Apple",
    },
  ];

  return (
    <>
      <Header
        wordKey={Routes.brands.wordKey}
        description={Routes.brands.description}
      />
      <main className="brand-container">
        <div className="icons-container">
          <div>
            <button
              className="buttons"
              onClick={() => {
                console.log("running?");
              }}
            >
              <Modals />
              <div className="modal"></div>
              <AddIcon fontSize="small" />
            </button>
            <button className="buttons">
              <AddIcon fontSize="small" />
            </button>
            <span style={{ color: "#707070" }}>1 registro</span>
          </div>
        </div>
        <div className="row-grid">
          <XGridDemo titles={titles} data={data} />
        </div>
        <CustomButton name="Agregar" color="black" />
      </main>
    </>
  );
};

export default Brand;
