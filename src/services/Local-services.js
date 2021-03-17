// Esta función se usa en Xgrid para validar si una fila está seleccionada o no y en caso de que
// lo esté ejecutar el callback solicitado
export const validateRowSelected = (newSelection, selectedStatus, callback) => {
  const selectedRow = newSelection.data;
  const getSelectedRow = newSelection.api.current.getSelectedRows();
  if (selectedStatus.status) {
    if (getSelectedRow[0].id) {
      if (selectedRow.id === getSelectedRow[0].id) {
        callback({
          status: false,
          row: selectedRow,
        });
      }
    }
  } else {
    callback({
      status: true,
      row: selectedRow,
    });
  }
};

// refrescar la pagina
export const refreshPage = () => {
  window.location.reload();
};

// validar que solo hayan letras/cadena de string
export const lettersOnly = (value) =>
  /^(?=s*[a-zA-Z])([a-zA-Z0-9\s]+)$/.test(value);
