import React from "react";
import Alert from "@material-ui/lab/Alert";

import { Snackbar } from "@material-ui/core";

export const SnackBar = (props) => {
  const snackbarInfo = props.snackBar;

  const alertBody = (
    <div>
      <Alert
        elevation={snackbarInfo.alertElevation}
        variant={snackbarInfo.variant}
        onClose={() => {
          snackbarInfo.setOpenAlert(false);
        }}
        severity="error"
      >
        {snackbarInfo.message}
      </Alert>
      <Alert
        elevation={snackbarInfo.alertElevation}
        variant={snackbarInfo.variant}
        onClose={() => {
          snackbarInfo.setOpenAlert(false);
        }}
        severity="warning"
      >
        {snackbarInfo.message}
      </Alert>
      <Alert
        elevation={snackbarInfo.alertElevation}
        variant={snackbarInfo.variant}
        onClose={() => {
          snackbarInfo.setOpenAlert(false);
        }}
        severity="success"
      >
        {snackbarInfo.message}
      </Alert>
    </div>
  );

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
      {alertBody}
    </Snackbar>
  );
};
