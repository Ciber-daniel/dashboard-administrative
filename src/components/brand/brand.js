import React, { useState } from "react";
// routes
import { Routes } from "../../routes/routes";
// styles
import "./brands.css";
// components
import Header from "../header/Header";
// utils
import XGridDemo from "../utils/grid/Xgrid";
// import CustomButton from "../utils/button/Button";
import TransitionModal from "../utils/modals/Modals";
// assets
import addIcon from "../../assets/icons/rediseño.svg";
import reload from "../../assets/icons/actualizar.svg";
// import editar from "../../assets/icons/editar.svg";
// import eliminar from "../../assets/icons/eliminar.svg";

const Brand = () => {
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState(false);

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
        <TransitionModal statusOpen={open} setOpen={setOpen} />
        <div className="row-grid-brands">
          <XGridDemo titles={titles} data={data} />
        </div>
      </main>
    </>
  );
};

export default Brand;
