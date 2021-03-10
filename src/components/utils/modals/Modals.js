import React from "react";
import {
  Backdrop,
  Divider,
  Fade,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core";
// styles
import "../modals/Modals.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "Column",
    outline: "none",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[10],
    width: "50%",
    height: "70%",
  },
}));

export const Modals = (props) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={props.statusOpen}
          onClose={() => {
            props.setOpen(false);
          }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={props.statusOpen}>
            <div className={classes.paper} style={{ borderRadius: "3%" }}>
              <div className="form">
                <form action="submit" style={{ width: "100%", height: "100%" }}>
                  <div className="title">
                    <h2>Agregar Marca</h2>
                  </div>
                  <div className="divider">
                    <Divider />
                  </div>
                  <div className="inputs">
                    <label htmlFor="standard-full-width">Label</label>
                    <div className="input-container">
                      <TextField
                        id="standard-full-width"
                        placeholder="Tipo de bien"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                    <label htmlFor="standard-full-width-2">Label </label>
                    <div className="input-container">
                      <TextField
                        id="standard-full-width-2"
                        placeholder="Tipo de bien"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="button"></div>
                </form>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
};
