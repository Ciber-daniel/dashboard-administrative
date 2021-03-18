import React, { useState } from "react";
// routes
import { Routes } from "../../consts/Routes-App";
// styles
import "./insurers.css";
// components
import Header from "../../components/header/Header";
// utils
import XGridDemo from "../../components/utils/grid/Xgrid";
import TransitionModal from "../../components/utils/modals/Modals";
import { modalsInfoInsurers } from "../../consts/Modals-info";
// consts
import { data, titles } from "../../consts/Insurer-data";

const Insurer = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selected, setSelected] = useState({
    status: false,
    row: {},
  });

  return (
    <>
      <Header
        wordKey={Routes.insurers.wordKey}
        description={Routes.insurers.description}
        selectedStatus={selected}
        registers={selected.status ? 1 : 0}
        setOpenAdd={setOpenAdd}
        setOpenEdit={setOpenEdit}
        setOpenDelete={setOpenDelete}
      />
      <TransitionModal
        statusOpen={openAdd}
        setOpen={setOpenAdd}
        data={modalsInfoInsurers.add}
        snackbarData={{
          message: "Aseguradora guardada exitosamente",
          severity: "success",
        }}
      />
      <TransitionModal
        statusOpen={openEdit}
        setOpen={setOpenEdit}
        data={modalsInfoInsurers.edit}
        snackbarData={{
          message: "Aseguradora guardada exitosamente",
          severity: "success",
        }}
      />
      <TransitionModal
        statusOpen={openDelete}
        setOpen={setOpenDelete}
        data={modalsInfoInsurers.delete}
        snackbarData={{
          message: "Aseguradora guardada exitosamente",
          severity: "success",
        }}
        row={selected.row}
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
