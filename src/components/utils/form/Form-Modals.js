import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";
// styles
import "./form.css";
// assets
import placeholder from "../../../assets/img/placeholder.svg";
// button
import CustomButton from "../button/Button";
import styles from "../button/Button.Style";

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

export default function FormModals(props) {
  const [{ alt, src }, setImg] = useState({
    src: placeholder,
    alt: "Upload an Image",
  });

  const [currency, setCurrency] = useState("1");

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleClose = () => {
    props.setState({ ...state, open: false });
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
  };
  const classes = styles(props);
  return (
    <div className="form">
      <form
        style={{ width: "100%", height: "100%" }}
        noValidate
        autoComplete="off"
      >
        <div className="title">
          {props.data.title === "Eliminar Marca" ? (
            <h2 style={{ color: "red" }}>{props.data.title}</h2>
          ) : (
            <h2>{props.data.title}</h2>
          )}
        </div>
        <div className="divider">
          <Divider />
        </div>
        <div className="inputs">
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
          {props.data.title === "Eliminar Marca" ? (
            <div className="container-modal-buttons">
              <CustomButton
                className={classes.redBtn}
                onClick={props.data.buttonTitle.action}
                name={props.data.buttonTitle.title}
                severity={"warning"}
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
                className={classes.defaultBtn}
                name={props.data.buttonTitle.title}
                alert="true"
                state={state}
                callback={handleClick}
                callbackClose={handleClose}
                message={"Marca agregada con éxito"}
                severity={"success"}
              />
              <CustomButton
                className={classes.whiteBtn}
                alert="false"
                callback={() => {
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
