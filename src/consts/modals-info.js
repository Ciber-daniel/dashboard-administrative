import { addItem } from "../services/services";

export const modalsInfoBrands = {
  add: {
    title: "Agregar marca",
    firstInput: { label: "Tipo de bien", placeholder: "Tipo de bien" },
    secondInput: { label: "Marca", placeholder: "Marca" },
    buttonTitle: { title: "Agregar", action: addItem },
  },
  edit: {
    title: "Editar marca",
    firstInput: { label: "Tipo de bien", placeholder: "Tipo de bien" },
    secondInput: { label: "Marca", placeholder: "Marca" },
    buttonTitle: { title: "Guardar cambios", action: addItem },
  },
  delete: {
    title: "Eliminar Marca",
    firstInput: { label: "Tipo de bien", placeholder: "Tipo de bien" },
    secondInput: { label: "Marca", placeholder: "Marca" },
    buttonTitle: { title: "Eliminar", action: addItem },
  },
};

export const modalsInfoInsurers = {
  add: {
    title: "Agregar aseguradora",
    firstInput: { label: "Hooli", placeholder: "Si" },
    secondInput: { label: "Nombre de la aseguradora", placeholder: "BBVA" },
    buttonTitle: { title: "Agregar", action: addItem },
  },
  edit: {
    title: "Editar aseguradora",
    firstInput: { label: "Hooli", placeholder: "Si" },
    secondInput: { label: "Nombre de la aseguradora", placeholder: "BBVA" },
    buttonTitle: { title: "Guardar cambios", action: addItem },
  },
  delete: {
    title: "Eliminar aseguradora",
    firstInput: { label: "Hooli", placeholder: "Si" },
    secondInput: { label: "Nombre de la aseguradora", placeholder: "BBVA" },
    buttonTitle: { title: "Eliminar", action: addItem },
  },
};
