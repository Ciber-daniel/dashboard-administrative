import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Add from "../../../assets/icons/rediseño.svg";
import Refresh from "../../../assets/icons/actualizar.svg";
import FormModals from "../form/Form-Modals";

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
    height: "70%",
  },
}));

export default function ModalsWithButtons(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = useState(props.statusOpen);

  const body = (
    <div className={classes.paper}>
      <FormModals />
    </div>
  );

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
        open={props.statusOpen}
        onClose={() => {
          props.setOpen(false);
        }}
      >
        {body}
      </Modal>
    </div>
  );
}
