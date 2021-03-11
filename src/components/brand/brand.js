import React from "react";
// routes
import { Routes } from "../../routes/routes";
// styles
import "./brands.css";
// components
import Header from "../header/Header";
// utils
import XGridDemo from "../utils/grid/Xgrid";
import CustomButton from "../utils/button/Button";
import ModalsWithButtons from "../utils/modals/Modals";

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
          <ModalsWithButtons />
        </div>
        <div className="row-grid-brands">
          <XGridDemo titles={titles} data={data} />
        </div>
      </main>
    </>
  );
};

export default Brand;
