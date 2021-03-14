import React, { useState } from "react";
// styles
import "./brands.css";
// components
import Header from "../../components/header/Header";
// utils
import XGridDemo from "../../components/utils/grid/Xgrid";
import TransitionModal from "../../components/utils/modals/Modal-Brands";
// consts
import { data, titles } from "../../consts/brand-data";
import { modalsInfoBrands } from "../../consts/modals-info";
// routes
import { Routes } from "../../consts/routes";

const Brand = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selected, setSelected] = useState(false);

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
