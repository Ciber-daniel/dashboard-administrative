import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { SnackBar } from "../snackbars/Snackbar";
import styles from "./Button.Style";

export default function CustomButton(props) {
  const [openAlert, setOpenAlert] = useState(true);

  console.log(props);

  const classes = styles(props);

  return (
    <div className="container-modal-buttons">
      {props.data.title.includes("Eliminar") ? (
        <div className="container-modal-buttons">
          <Button
            type="submit"
            disabled={
              !props.inputsValues.firstInput ||
              !props.inputsValues.secondInput ||
              !props.inputsValues.imageInput ||
              props.submitState
            }
            className={classes.redBtn}
          >
            <span>{props.data.buttonInfo.title}</span>
          </Button>
          <Button
            className={classes.whiteBtn}
            onClick={() => {
              props.setOpen(false);
            }}
          >
            <span>Cancelar</span>
          </Button>
        </div>
      ) : (
        <div className="container-modal-buttons">
          <Button
            type="submit"
            className={classes.defaultBtn}
            onClick={() => {
              setOpenAlert(true);
            }}
            disabled={
              !props.inputsValues.firstInput ||
              !props.inputsValues.secondInput ||
              !props.inputsValues.imageInput ||
              props.submitState
            }
          >
            <span>{props.data.buttonInfo.title}</span>
          </Button>
          <SnackBar
            snackBar={{
              // autoHideDuration: 5000,
              data: props.data,
              vertical: "top",
              horizontal: "center",
              openAlert: openAlert,
              setOpenAlert: () => {
                setOpenAlert(false);
              },
              severity: "success",
              message: props.message,
              alertElevation: 6,
              varian: "filled",
            }}
          />
          <Button
            className={classes.whiteBtn}
            onClick={() => {
              props.setOpen(false);
            }}
          >
            <span>Cancelar</span>
          </Button>
        </div>
      )}
    </div>
  );
}
