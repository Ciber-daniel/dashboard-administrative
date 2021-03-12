import React, { useState } from "react";
// routes
import { Routes } from "../../consts/routes";
// styles
import "./brands.css";
// components
import Header from "../header/Header";
// utils
import XGridDemo from "../utils/grid/Xgrid";
import TransitionModal from "../utils/modals/Modals";
// consts
import { modalsInfo } from "../../consts/modals-info";

const Brand = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
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

  console.log(modalsInfo);

  return (
    <>
      <Header
        wordKey={Routes.brands.wordKey}
        description={Routes.brands.description}
        selectedStatus={selected}
        setOpenAdd={setOpenAdd}
        setOpenEdit={setOpenEdit}
        setOpenDelete={setOpenDelete}
      />

      <main className="brand-container">
        <TransitionModal
          statusOpen={openAdd}
          setOpen={setOpenAdd}
          data={modalsInfo.add}
        />
        <TransitionModal
          statusOpen={openEdit}
          setOpen={setOpenEdit}
          data={modalsInfo.edit}
        />
        <TransitionModal
          statusOpen={openDelete}
          setOpen={setOpenDelete}
          data={modalsInfo.delete}
        />
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
