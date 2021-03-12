import { addItem } from "../services/services";

export const modalsInfo = {
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
