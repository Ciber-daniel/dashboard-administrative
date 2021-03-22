import React from "react";
import Alert from "@material-ui/lab/Alert";
import "./snackbar.css";
import { Snackbar } from "@material-ui/core";

export const SnackBar = (props) => {
  const { snackbarData } = props;

  const alertBody = (
    <div
      style={{
        width: "100%",
      }}
    >
      <Alert
        className="alert-info"
        elevation={snackbarData.alertElevation}
        severity={snackbarData.severity}
        color={snackbarData.severity}
      >
        <span>{snackbarData.message}</span>
      </Alert>
    </div>
  );

  return (
    <Snackbar
      autoHideDuration={snackbarData.autoHideDuration}
      anchorOrigin={{
        vertical: snackbarData.vertical,
        horizontal: snackbarData.horizontal,
      }}
      open={snackbarData.openAlert}
      onClose={() => {
        snackbarData.setOpenAlert(false);
      }}
      key={snackbarData.vertical + "-" + snackbarData.horizontal}
    >
      {alertBody}
    </Snackbar>
  );
};
