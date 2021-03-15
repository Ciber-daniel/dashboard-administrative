import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import { Divider } from "@material-ui/core";
import { useFormik } from "formik";
// assets
import placeholder from "../../../assets/img/placeholder.svg";
// consts
import { currencies } from "../../../consts/Currencies";
// styles
import "./form.css";
// services
import { lettersOnly } from "../../../services/Local-services";
// utils
import CustomButton from "../button/Button";
import { DeleteForm } from "./deleteForm/Delete-form";

const validationSchema = yup.object({
  type: yup.string().required("Seleccione una opción"),
  brand: yup
    .string()
    .test("Letters only", "El campo debe tener solo letras", lettersOnly)
    .required("Rellene el campo"),
  photo: yup.string("Ok?").required("Suba una imagen"),
});

export default function BrandForm(props) {
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
      type: "",
      brand: "",
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
    <>
      {props.data.title.includes("Eliminar") ? (
        <DeleteForm
          setOpen={props.setOpen}
          src={src}
          alt={alt}
          data={props.data}
          row={props.row}
          formik={formik}
          message="Aseguradora agregada con exito"
          handleSubmit={formik.handleSubmit}
          isSubmitting={formik.isSubmitting}
        />
      ) : (
        <div className="form">
          <form
            style={{ width: "100%", height: "100%" }}
            onSubmit={formik.handleSubmit}
            autoComplete="off"
          >
            <div className="title">
              <h2>{props.data.title}</h2>
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
                <div className="container-inverse">
                  <div className="input-container">
                    <TextField
                      label={props.data.firstInput.label}
                      name="type"
                      id="standard-select-currency-native"
                      select
                      SelectProps={{
                        native: true,
                      }}
                      className="width-select"
                      value={formik.values.type}
                      onChange={formik.handleChange}
                      error={formik.touched.type && Boolean(formik.errors.type)}
                      onBlur={formik.handleBlur}
                      helperText={formik.errors.type}
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div className="input-container">
                    <TextField
                      label={props.data.secondInput.label}
                      name="brand"
                      id="standard-full-width"
                      placeholder={props.data.secondInput.placeholder}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      value={formik.values.brand}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.brand && Boolean(formik.errors.brand)
                      }
                      helperText={formik.touched.brand && formik.errors.brand}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
              </div>
              <div className="form__img-input-container">
                <input
                  type="file"
                  accept=".png"
                  id="photo"
                  name="photo"
                  className="visually-hidden"
                  onChange={handleImg}
                />
                <label htmlFor="photo" className="form-img__file-label"></label>
                <img src={src} alt={alt} className="form-img__img-preview" />
              </div>
            </div>
            <div className="container-modal-buttons">
              <CustomButton
                formik={formik}
                data={props.data}
                inputsValues={{
                  firstInput: formik.values.type,
                  secondInput: formik.values.brand,
                  imageInput: formik.values.photo,
                }}
                submitState={formik.isSubmitting}
                setOpen={props.setOpen}
                message="Marca agregada con exito"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
}