export const validateRowSelected = (newSelection, selectedStatus, callback) => {
  const selectedRow = newSelection.data;
  const getSelectedRow = newSelection.api.current.getSelectedRows();
  if (selectedStatus) {
    if (selectedRow.id === getSelectedRow[0].id) {
      callback(false);
    }
  } else {
    callback(true);
  }
};

export const refreshPage = () => {
  window.location.reload();
};
