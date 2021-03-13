import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomButton(props) {
  const state = { props };
  const { vertical, horizontal, open } = props.state;

  const handleClose = () => {
    props.setState({ ...state, open: false });
  };

  const buttons = (
    <Button {...props} onClick={() => props.onClick()}>
      <span>{props.name}</span>
    </Button>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
