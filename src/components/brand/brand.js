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

const Brand = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(false);

  const titles = ["Tipo de bien", "Nombre"];
  const data = [
    {
      id: "1",
      type: "Computadora",
      name: "Apple",
    },
    {
      id: "2",
      type: "Computadora",
      name: "Apple",
    },
    {
      id: "3",
      type: "Computadora",
      name: "Apple",
    },
    {
      id: "4",
      type: "Computadora",
      name: "Apple",
    },
  ];

  return (
    <>
      <Header
        wordKey={Routes.brands.wordKey}
        description={Routes.brands.description}
        selectedStatus={selected}
      />

      <main className="brand-container">
        <TransitionModal statusOpen={open} setOpen={setOpen} />
        <div className="row-grid-brands">
          <XGridDemo
            titles={titles}
            data={data}
            selectedStatus={selected}
            selected={setSelected}
          />
        </div>
      </main>
    </>
  );
};

export default Brand;
