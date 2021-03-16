import React from "react";
import Button from "@material-ui/core/Button";
// styles
import styles from "./Button.Style";
// utils
import { SnackBar } from "../snackbars/Snackbar";

export default function CustomButton(props) {
  const {
    data,
    inputsValues,
    submitState,
    setOpen,
    message,
    setOpenAlert,
    openAlert,
  } = props;
  const classes = styles(props);
  console.log(data);

  return (
    <div className="container-modal-buttons">
      <div className="container-modal-buttons">
        <Button
          type="submit"
          className={
            data.title.includes("Eliminar")
              ? classes.redBtn
              : classes.defaultBtn
          }
          disabled={
            !inputsValues.firstInput ||
            !inputsValues.secondInput ||
            !inputsValues.imageInput ||
            submitState
          }
        >
          <span>{data.buttonInfo.title}</span>
        </Button>

        <Button
          disabled={submitState}
          className={classes.whiteBtn}
          onClick={() => {
            setOpen(false);
          }}
        >
          <span>Cancelar</span>
        </Button>
        <SnackBar
          snackbarData={{
            autoHideDuration: 5000,
            data: data,
            vertical: "top",
            horizontal: "center",
            openAlert: openAlert,
            setOpenAlert: () => {
              setOpenAlert(false);
            },
            severity: "success",
            message: message,
            alertElevation: 6,
            varian: "filled",
          }}
        />
      </div>
    </div>
  );
}
