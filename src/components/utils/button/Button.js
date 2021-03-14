import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { SnackBar } from "../snackbars/snackbar";
import styles from "./Button.Style";
import "./button.css";

export default function CustomButton(props, data) {
  const [openAlert, setOpenAlert] = useState(true);

  const classes = styles(props);

  return (
    <div className="container-modal-buttons">
      {props.data.title.includes("Eliminar") ? (
        <div className="container-modal-buttons">
          <Button
            className={classes.redBtn}
            onClick={() => {
              props.data.buttonInfo.action(() => {
                props.setOpen(false);
              });
              props.setOpen(false);
            }}
            name={props.data.buttonInfo.title}
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
            className={classes.defaultBtn}
            // onClick={() => {
            //   props.data.buttonInfo.title === "Agregar"
            //     ? props.data.buttonInfo.action(() => {
            //         setOpenAlert(true);
            //         setTimeout(() => {
            //           props.setOpen(false);
            //         }, 3000000);
            //       })
            //     : props.data.buttonInfo.action(() => {
            //         props.setOpen(false);
            //       });
            // }}
          >
            <span>{props.data.buttonInfo.title}</span>
          </Button>

          <SnackBar
            snackBar={{
              // autoHideDuration: 5000,
              vertical: "top",
              horizontal: "center",
              openAlert: openAlert,
              setOpenAlert: () => {
                setOpenAlert(false);
              },
              severity: "success",
              message: "Marca agregada con exito",
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
