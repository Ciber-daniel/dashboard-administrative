import React, { useState } from "react";
// routes
import { Routes } from "../../consts/routes";
// styles
import "./insurers.css";
// components
import Header from "../../components/header/Header";
// utils
import XGridDemo from "../../components/utils/grid/Xgrid";
import TransitionModal from "../../components/utils/modals/Modals";
import { modalsInfo } from "../../consts/modals-info";

const Insurer = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selected, setSelected] = useState(false);

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
        selectedStatus={selected}
        setOpenAdd={setOpenAdd}
        setOpenEdit={setOpenEdit}
        setOpenDelete={setOpenDelete}
      />
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
      <div className="insurers-container">
        <div className="row-grid-insurers">
          <XGridDemo
            titles={titles}
            data={data}
            selectedStatus={selected}
            selected={setSelected}
          />
        </div>
      </div>
    </>
  );
};

export default Insurer;
