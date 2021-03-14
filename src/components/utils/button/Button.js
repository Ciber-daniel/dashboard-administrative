import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { SnackBar } from "../snackbars/snackbar";
import { useFormik } from "formik";
import styles from "./Button.Style";
import "./button.css";

export default function CustomButton(props) {
  const [openAlert, setOpenAlert] = useState(true);

  const classes = styles(props);

  return (
    <div className="container-modal-buttons">
      {props.data.title.includes("Eliminar") ? (
        <div className="container-modal-buttons">
          <Button
            type="submit"
            disabled={
              props.formik.isSubmitting ||
              !props.formik.values.type ||
              !props.formik.values.brand
            }
            className={classes.redBtn}
            name={props.data.buttonInfo.title}
            onClick={() => {
              console.log(formik.isValid);
            }}
          />
          <Button
            className={classes.whiteBtn}
            onClick={() => {
              props.setOpen(false);
            }}
            name="Cancelar"
          />
        </div>
      ) : (
        <div className="container-modal-buttons">
          <Button
            type="submit"
            className={classes.defaultBtn}
            disabled={
              props.formik.isSubmitting ||
              !props.formik.values.type ||
              !props.formik.values.brand ||
              !props.formik.values.photo
            }
            name={props.data.buttonInfo.title}
          />
          <SnackBar
            snackBar={{
              autoHideDuration: 5000,
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
            name="Cancelar"
          />
        </div>
      )}
    </div>
  );
}
