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
// services
import { lettersOnly } from "../../../services/local-services";

const validationSchema = yup.object({
  hooli: yup
    .string("Seleccione un campo")
    .required("Por favor rellene este campo"),
  insurer: yup
    .string("Defina el nombre de la aseguradora")
    .min(4, "Debe tener minimo 4 letras")
    .test("Letters only", "El campo debe tener solo letras", lettersOnly)
    .required("Por favor rellene este campo"),
});

export default function InsureForm(props) {
  const [{ alt, src }, setImg] = useState({
    src: placeholder,
    alt: "Upload an Image",
  });

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
            setTimeout(() => {
              props.setOpen(false);
            }, 3000);
          })
        : props.data.buttonInfo.action(() => {
            props.setOpen(false);
          });
    },
  });

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
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
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
          <CustomButton
            setOpen={props.setOpen}
            inputsValues={{
              firstInput: formik.values.insurer,
              secondInput: formik.values.hooli,
              imageInput: formik.values.photo,
            }}
            submitState={formik.isSubmitting}
            data={props.data}
            message="Aseguradora agregada con exito"
          />
        </div>
      </form>
    </div>
  );
}
