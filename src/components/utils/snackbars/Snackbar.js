import React from "react";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import "./snackbar.css";
import { Snackbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  alertInfo: {
    marginTop: "4%",
    [theme.breakpoints.up("xl")]: {
      marginTop: "11%",
    },
  },
}));

export const SnackBar = (props) => {
  const classes = useStyles();
  const { snackbarData } = props;

  const alertBody = (
    <div
      style={{
        width: "100%",
      }}
    >
      <Alert
        className={classes.alertInfo}
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
