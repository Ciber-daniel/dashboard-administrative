import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomButton(props) {
  return (
    <div>
      <Button
        {...props}
        onClick={() => {
          props.callback();
          console.log(props.alert);
        }}
      >
        <span>{props.name}</span>
      </Button>
      {props.alert === "true" ? (
        <Snackbar
          autoHideDuration={5000}
          anchorOrigin={(props.state.vertical, props.state.horizontal)}
          open={props.state.open}
          onClose={props.callbackClose}
          key={props.state.vertical + props.state.horizontal}
        >
          <Alert onClose={props.handleClose} severity={props.severity}>
            {props.message}
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
    </div>
  );
}
