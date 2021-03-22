import { useFormik } from "formik";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import { Divider } from "@material-ui/core";
// assets
import placeholder from "../../../assets/img/placeholder.svg";
// services
import { lettersOnly } from "../../../services/Local-services";
// styles
import "./form.css";
// utils
import CustomButton from "../button/Button";

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
  const [openAlert, setOpenAlert] = useState(false);
  const { data, setOpen, row, snackbarData } = props;
  const validate = data.title.includes("Eliminar");

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
      hooli: validate ? row.name : "Si",
      insurer: validate ? row.type : "",
      photo: validate ? "disabled" : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      data.buttonInfo.action(() => {
        setOpenAlert(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000);
      });
    },
  });

  const redColor = validate ? "red" : "";

  return (
    <div className="form">
      <form
        style={{ width: "100%", height: "100%" }}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <div className="title">
          <h2 style={{ color: redColor }}>{data.title}</h2>
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
              {validate ? (
                <TextField
                  label={data.firstInput.label}
                  disabled
                  name="hooli"
                  id="standard-full-width"
                  value={row.name}
                  className="width-select"
                ></TextField>
              ) : (
                <TextField
                  label={data.firstInput.label}
                  name="hooli"
                  id="standard-select-currency-native"
                  select
                  disabled={formik.isSubmitting}
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
              )}
            </div>
            <div className="input-container">
              {validate ? (
                <TextField
                  label={props.data.secondInput.label}
                  disabled
                  id="standard-full-width"
                  name="insurer"
                  margin="normal"
                  value={row.type}
                  fullWidth
                />
              ) : (
                <TextField
                  label={props.data.secondInput.label}
                  id="standard-full-width"
                  name="insurer"
                  placeholder={props.data.secondInput.placeholder}
                  margin="normal"
                  disabled={formik.isSubmitting}
                  value={formik.values.insurer}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.insurer && Boolean(formik.errors.insurer)
                  }
                  helperText={formik.touched.insurer && formik.errors.insurer}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              )}
            </div>
          </div>
          <div className="container-form-img">
            <div className="form__img-input-container">
              <input
                type="file"
                accept=".png"
                id="photo"
                disabled={validate}
                className="visually-hidden"
                onChange={handleImg}
              />
              <label htmlFor="photo" className="form-img__file-label"></label>
              <img src={src} alt={alt} className="form-img__img-preview" />
            </div>
          </div>
        </div>
        <div className="container-modal-buttons">
          <CustomButton
            data={data}
            inputsValues={{
              firstInput: formik.values.insurer,
              secondInput: formik.values.hooli,
              imageInput: formik.values.photo,
            }}
            submitState={formik.isSubmitting}
            setOpen={setOpen}
            message={snackbarData.message}
            setOpenAlert={setOpenAlert}
            openAlert={openAlert}
          />
        </div>
      </form>
    </div>
  );
}
