import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomButton(props) {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <Button
      {...props}
      onClick={handleClick({
        vertical: "top",
        horizontal: "center",
      })}
    >
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
