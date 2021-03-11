import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";
// styles
import "./form.css";
import placeholder from "../../../assets/img/placeholder.jpg";

const currencies = [
  {
    value: "1",
    label: "Tipo de bien",
  },
  {
    value: "2",
    label: "Computadora",
  },
  {
    value: "3",
    label: "Celular",
  },
  {
    value: "4",
    label: "Auto",
  },
];

export default function FormModals() {
  const [currency, setCurrency] = useState("1");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

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
          <h2>Agregar Marca</h2>
        </div>
        <div className="divider">
          <Divider />
        </div>
        <div className="inputs">
          <div className="input-container">
            <TextField
              label="Tipo de bien"
              id="standard-select-currency-native"
              select
              value={currency}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              fullWidth
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
              label="Marca"
              id="standard-full-width"
              placeholder="Marca"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </div>
          <div className="form__img-input-container">
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              id="photo"
              className="visually-hidden"
              onChange={handleImg}
            />
            <label htmlFor="photo" className="form-img__file-label"></label>
            <img src={src} alt={alt} className="form-img__img-preview" />
          </div>
        </div>
      </form>
    </div>
  );
}
