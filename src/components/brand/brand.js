import React, { useState } from "react";
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
  const [open, setOpen] = useState(true);

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
      <div style={{ marginBottom: "11rem" }}>
        <Header
          wordKey={Routes.brands.wordKey}
          description={Routes.brands.description}
        />
      </div>
      <main className="brand-container">
        <div className="icons-container">
          <div>
            <button
              className="buttons"
              onClick={() => {
                setOpen(true);
              }}
            >
              <AddIcon fontSize="small" />
            </button>
            <button className="buttons">
              <AddIcon fontSize="small" />
            </button>
            <span
              style={{
                color: "#707070",
                fontSize: "100%",
                marginLeft: "0.8rem",
              }}
            >
              1 registro
            </span>
          </div>
          <Modals statusOpen={open} setOpen={setOpen} />
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
