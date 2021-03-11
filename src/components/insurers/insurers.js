import React from "react";
// routes
import { Routes } from "../../routes/routes";
// styles
import "./insurers.css";
// components
import Header from "../header/Header";
// utils
import XGridDemo from "../utils/grid/Xgrid";
import ModalsWithButtons from "../utils/modals/Modals";

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
      <div className="insurers-container">
        <div className="icons-container">
          <ModalsWithButtons />
        </div>
        <div className="row-grid-insurers">
          <XGridDemo titles={titles} data={data} />
        </div>
      </div>
    </>
  );
};

export default Insurer;
