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

export const refreshPage = () => {
  window.location.reload();
};

export const lettersOnly = (value) => /^\D.+$/.test(value);
