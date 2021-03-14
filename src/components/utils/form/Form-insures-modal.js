import { useFormik } from "formik";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import { Divider } from "@material-ui/core";
// styles
import "./form.css";
// assets
import placeholder from "../../../assets/img/placeholder.svg";
// utils
import CustomButton from "../button/Button";
import styles from "../button/Button.Style";
import { SnackBar } from "../snackbars/snackbar";
// services

const validationSchema = yup.object({
  hooli: yup.string("Seleccione un campo"),
  insurer: yup
    .string("Defina el nombre de la aseguradora")
    .min(4, "Debe tener minimo 4 letras"),
});

export default function InsureForm(props) {
  const [{ alt, src }, setImg] = useState({
    src: placeholder,
    alt: "Upload an Image",
  });

  const [openAlert, setOpenAlert] = useState(false);

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
      formik.values.photo = src;
    }
  };

  const formik = useFormik({
    initialValues: {
      hooli: "Si",
      insurer: "",
      photo: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.data.buttonInfo.title === "Agregar"
        ? props.data.buttonInfo.action(() => {
            setOpenAlert(true);
            setTimeout(() => {
              props.setOpen(false);
            }, 3000);
          })
        : props.data.buttonInfo.action(() => {
            props.setOpen(false);
          });
    },
  });

  const classes = styles(props);

  return (
    <div className="form">
      <form
        style={{ width: "100%", height: "100%" }}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <div className="title">
          {props.data.title.includes("Eliminar") ? (
            <h2 style={{ color: "red" }}>{props.data.title}</h2>
          ) : (
            <h2>{props.data.title}</h2>
          )}
        </div>
        <div className="divider">
          <Divider />
        </div>
        <div className="inputs">
          <div
            className="container-inverse"
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              marginTop: "-5%",
            }}
          >
            <div className="input-container">
              <TextField
                label={props.data.firstInput.label}
                name="hooli"
                id="standard-select-currency-native"
                select
                SelectProps={{
                  native: true,
                }}
                value={formik.values.hooli}
                onChange={formik.handleChange}
                error={formik.touched.hooli && Boolean(formik.errors.hooli)}
                helperText={formik.touched.hooli && formik.errors.hooli}
                className="width-select"
              >
                <option>Si</option>
                <option>No</option>
              </TextField>
            </div>
            <div className="input-container">
              <TextField
                label={props.data.secondInput.label}
                id="standard-full-width"
                name="insurer"
                placeholder={props.data.secondInput.placeholder}
                margin="normal"
                value={formik.values.insurer}
                onChange={formik.handleChange}
                error={formik.touched.insurer && Boolean(formik.errors.insurer)}
                helperText={formik.touched.insurer && formik.errors.insurer}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </div>
          </div>
          <div className="form__img-input-container">
            <input
              type="file"
              accept=".png"
              id="photo"
              className="visually-hidden"
              onChange={handleImg}
            />
            <label htmlFor="photo" className="form-img__file-label"></label>
            <img src={src} alt={alt} className="form-img__img-preview" />
          </div>
        </div>
        <div className="container-modal-buttons">
          {props.data.title.includes("Eliminar") ? (
            <div className="container-modal-buttons">
              <CustomButton
                type="submit"
                className={classes.redBtn}
                name={props.data.buttonInfo.title}
                disabled={
                  formik.isSubmitting ||
                  !formik.values.photo ||
                  !formik.values.insurer
                }
              />
              <CustomButton
                className={classes.whiteBtn}
                onClick={() => {
                  props.setOpen(false);
                }}
                name="Cancelar"
              />
            </div>
          ) : (
            <div className="container-modal-buttons">
              <CustomButton
                type="submit"
                className={classes.defaultBtn}
                name={props.data.buttonInfo.title}
                disabled={
                  formik.isSubmitting ||
                  !formik.values.photo ||
                  !formik.values.insurer
                }
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
              <CustomButton
                className={classes.whiteBtn}
                onClick={() => {
                  props.setOpen(false);
                }}
                name="Cancelar"
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
