import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
// forms
import BrandForm from "../form/Form-brands-modal";
import InsureForm from "../form/Form-insures-modal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "Column",
    outline: "none",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[10],
    width: "50%",
    height: "75%",
  },
}));

export default function TransitionModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const body = props.data.title.includes("aseguradora") ? (
    <div className={classes.paper} style={{ borderRadius: "3%" }}>
      <InsureForm setOpen={props.setOpen} data={props.data} />
    </div>
  ) : (
    <div className={classes.paper} style={{ borderRadius: "3%" }}>
      <BrandForm setOpen={props.setOpen} data={props.data} />
    </div>
  );

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
        open={props.statusOpen}
      >
        <Fade
          in={props.statusOpen}
          className={classes.modal}
          style={{ width: "100%", height: "100%" }}
        >
          <div className={classes.modal}>{body}</div>
        </Fade>
      </Modal>
    </div>
  );
}
