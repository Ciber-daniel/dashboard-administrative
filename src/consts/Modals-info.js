import {
  addBrand,
  deleteBrand,
  editBrand,
  addInsurer,
  editInsurer,
  deleteInsurer,
} from "../services/Api-services";

export const modalsInfoBrands = {
  add: {
    title: "Agregar marca",
    firstInput: { label: "Tipo de bien", placeholder: "Tipo de bien" },
    secondInput: { label: "Marca", placeholder: "Marca" },
    buttonInfo: { title: "Agregar", action: addBrand },
  },
  edit: {
    title: "Editar marca",
    firstInput: { label: "Tipo de bien", placeholder: "Tipo de bien" },
    secondInput: { label: "Marca", placeholder: "Marca" },
    buttonInfo: { title: "Guardar cambios", action: editBrand },
  },
  delete: {
    title: "Eliminar Marca",
    firstInput: { label: "Tipo de bien", placeholder: "Tipo de bien" },
    secondInput: { label: "Marca", placeholder: "Marca" },
    buttonInfo: { title: "Eliminar", action: deleteBrand },
  },
};

export const modalsInfoInsurers = {
  add: {
    title: "Agregar aseguradora",
    firstInput: { label: "Hooli", placeholder: "Si" },
    secondInput: { label: "Nombre de la aseguradora", placeholder: "BBVA" },
    buttonInfo: { title: "Agregar", action: addInsurer },
  },
  edit: {
    title: "Editar aseguradora",
    firstInput: { label: "Hooli", placeholder: "Si" },
    secondInput: { label: "Nombre de la aseguradora", placeholder: "BBVA" },
    buttonInfo: { title: "Guardar cambios", action: editInsurer },
  },
  delete: {
    title: "Eliminar aseguradora",
    firstInput: { label: "Hooli", placeholder: "Si" },
    secondInput: { label: "Nombre de la aseguradora", placeholder: "BBVA" },
    buttonInfo: { title: "Eliminar", action: deleteInsurer },
  },
};
