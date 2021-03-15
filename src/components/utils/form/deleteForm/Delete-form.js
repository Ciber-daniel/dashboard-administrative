import { Divider, TextField } from "@material-ui/core";
import CustomButton from "../../button/Button";

export const DeleteForm = (props) => {
  const { data, row, alt, src, setOpen, isSubmitting, handleSubmit } = props;
  console.log(row);
  return (
    <form
      style={{ width: "100%", height: "100%" }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="title">
        <h2 style={{ color: "red" }}>{data.title}</h2>
      </div>
      <div className="divider">
        <Divider />
      </div>
      {data.title.includes("aseguradora") ? (
        <div className="inputs" style={{ width: "100%", margin: "auto" }}>
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
                className="width-select"
                label={data.firstInput.label}
                name="hooli"
                id="standard-full-width"
                value={row.type}
                disabled
              ></TextField>
            </div>
            <div className="input-container">
              <TextField
                label={data.secondInput.label}
                id="standard-full-width"
                name="insurer"
                margin="normal"
                disabled
                value={row.name}
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
            />
            <label htmlFor="photo" className="form-img__file-label"></label>
            <img src={src} alt={alt} className="form-img__img-preview" />
          </div>
        </div>
      ) : (
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
                  label={data.firstInput.label}
                  name="type"
                  id="standard-select-currency-native"
                  disabled
                  className="width-select"
                  value={row.type}
                />
              </div>
              <div className="input-container">
                <TextField
                  label={data.secondInput.label}
                  name="brand"
                  id="standard-full-width"
                  margin="normal"
                  disabled
                  fullWidth
                  value={row.name}
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
            />
            <label htmlFor="photo" className="form-img__file-label"></label>
            <img src={src} alt={alt} className="form-img__img-preview" />
          </div>
        </div>
      )}
      <div className="container-modal-buttons">
        <CustomButton
          setOpen={setOpen}
          submitState={isSubmitting}
          data={data}
        />
      </div>
    </form>
  );
};
