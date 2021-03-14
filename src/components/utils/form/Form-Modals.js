import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";
// styles
import "./form.css";
// assets
import placeholder from "../../../assets/img/placeholder.svg";
// utils
import CustomButton from "../button/Button";

// services
import { currencies } from "../../../consts/currencies";

export default function FormModals(props, data) {
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
    }
  };

  return (
    <div className="form">
      <form
        style={{ width: "100%", height: "100%" }}
        noValidate
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
          {props.data.title.includes("aseguradora") ? (
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
                  id="standard-select-currency-native"
                  select
                  SelectProps={{
                    native: true,
                  }}
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
                  placeholder={props.data.secondInput.placeholder}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </div>
            </div>
          ) : (
            <div className="container-inverse">
              <div className="input-container">
                <TextField
                  label={props.data.firstInput.label}
                  id="standard-select-currency-native"
                  select
                  SelectProps={{
                    native: true,
                  }}
                  className="width-select"
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
                  id="standard-full-width"
                  placeholder={props.data.secondInput.placeholder}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </div>
            </div>
          )}
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
          <CustomButton {...props} />
        </div>
      </form>
    </div>
  );
}
