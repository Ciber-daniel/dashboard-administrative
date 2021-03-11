import React from "react";
// icons
import AddIcon from "@material-ui/icons/Add";
// consts
import { Routes } from "../../routes/routes";
// styles
import "./insurers.css";
// components
import Header from "../header/Header";
import XGridDemo from "../utils/grid/Xgrid";

const Insurer = () => {
  const titles = ["Nombre de la aseguradora", "Hooli"];
  const data = [
    {
      id: "1",
      type: "BBVA",
      name: "Si",
    },
  ];

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
        <div className="row-grid-insurers">
          <XGridDemo titles={titles} data={data} />
        </div>
      </div>
    </>
  );
};

export default Insurer;
