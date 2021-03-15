import React, { useState } from "react";
// styles
import "./brands.css";
// components
import Header from "../../components/header/Header";
// utils
import XGridDemo from "../../components/utils/grid/Xgrid";
import TransitionModal from "../../components/utils/modals/Modals";
// consts
import { data, titles } from "../../consts/Brand-data";
import { modalsInfoBrands } from "../../consts/Modals-info";
// routes
import { Routes } from "../../consts/Routes-App";

const Brand = () => {
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
          data={modalsInfoBrands.add}
        />
        <TransitionModal
          statusOpen={openEdit}
          setOpen={setOpenEdit}
          data={modalsInfoBrands.edit}
        />
        <TransitionModal
          statusOpen={openDelete}
          setOpen={setOpenDelete}
          data={modalsInfoBrands.delete}
          row={selected.row}
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