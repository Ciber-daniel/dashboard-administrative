import React from "react";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

export const SnackBar = (props) => {
  const snackbarInfo = props.snackBar;
  return (
    <Snackbar
      autoHideDuration={snackbarInfo.autoHideDuration}
      anchorOrigin={{
        vertical: snackbarInfo.vertical,
        horizontal: snackbarInfo.horizontal,
      }}
      open={snackbarInfo.openAlert}
      onClose={() => {
        snackbarInfo.setOpenAlert(false);
      }}
      key={snackbarInfo.vertical + "-" + snackbarInfo.horizontal}
    >
      <Alert
        elevation={snackbarInfo.alertElevation}
        variant={snackbarInfo.variant}
        onClose={() => {
          snackbarInfo.setOpenAlert(false);
        }}
        severity={snackbarInfo.severity}
      >
        {snackbarInfo.message}
      </Alert>
    </Snackbar>
  );
};
