// Esta función se usa en Xgrid para validar si una fila está seleccionada o no y en caso de que
// lo esté ejecutar el callback solicitado
export const validateRowSelected = async (
  newSelection,
  selectedStatus,
  callback
) => {
  const selectedRow = newSelection.data;
  const getSelectedRow = await newSelection.api.current.getSelectedRows();
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

export const disableRowsNotSelected = (selectedStatus) => {
  const rows = document.getElementsByClassName("MuiDataGrid-row");
  // conversión de un objeto iterable a array e iteración.
  Array.from(rows).forEach((row) => {
    if (!selectedStatus) {
      // Aqui se valida el estado seleccionado.
      const classes = Array.from(row.classList);
      if (!classes.includes("Mui-selected")) {
        // Si no tiene la clase, las deshabilita.
        row.classList.add("disabled");
      }
    } else {
      // Si tiene la clase, las vuelve a habilitar.
      row.classList.remove("disabled");
    }
  });
};
