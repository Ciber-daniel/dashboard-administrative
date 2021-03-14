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
import { currencies } from "../../../consts/currencies";
import { useFormik } from "formik";

const validationSchema = yup.object({
  type: yup.string("Seleccione un campo").required("Este campo es requerido"),
  brand: yup
    .string("Defina el nombre de la aseguradora")
    .min(4, "Debe tener minimo 4 letras")
    .required("Este campo es requerido"),
  photo: yup.string("Ok?").required("Suba una imagen"),
});

export default function BrandForm(props) {
  const [openAlert, setOpenAlert] = useState(true);
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
                  helperText={formik.touched.type && formik.errors.type}
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
                  error={formik.touched.brand && Boolean(formik.errors.brand)}
                  helperText={formik.touched.brand && formik.errors.brand}
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
          <CustomButton formik={formik} {...props} />
        </div>
      </form>
    </div>
  );
}
