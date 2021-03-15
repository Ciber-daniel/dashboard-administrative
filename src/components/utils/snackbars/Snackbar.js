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
  const snackbarInfo = props.snackBar;

  const alertBody = (
    <div
      style={{
        width: "100%",
      }}
    >
      <Alert
        className={classes.alertInfo}
        elevation={snackbarInfo.alertElevation}
        severity="error"
        color="error"
      >
        <span style={{ color: "#D44141" }}>{snackbarInfo.message}</span>
      </Alert>
      {/* <Alert
         className={classes.alertInfo}
      elevation={snackbarInfo.alertElevation}
        severity="warning"
        color="warning"
      >
        <span style={{ color: "#FCC020" }}>{snackbarInfo.message}</span>
      </Alert>  */}
      {/* <Alert
        className={classes.alertInfo}
        elevation={snackbarInfo.alertElevation}
        severity="success"
        color="success"
      >
        <span style={{ color: "#63D1A2" }}>{snackbarInfo.message}</span>
      </Alert>
     */}
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
