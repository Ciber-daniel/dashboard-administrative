import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
// forms
import BrandForm from "../form/Form-brands-modal";
import InsureForm from "../form/Form-insures-modal";
// styles

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:focus": {
      outline: "none",
    },
    height: "78vh",
    paddingTop: theme.spacing(9),
    [theme.breakpoints.up("xl")]: {
      height: "73vh",
    },
  },
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "Column",
    outline: "none",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[10],
    width: "45%",
    height: "100%",
    [theme.breakpoints.up("xl")]: {
      height: "80%",
    },
  },
}));

export default function TransitionModal(props) {
  const classes = useStyles();
  const { row, setOpen, data, statusOpen, snackbarData } = props;

  const body = props.data.title.includes("aseguradora") ? (
    <div className={classes.paper} style={{ borderRadius: "0.63rem" }}>
      <InsureForm
        row={row}
        setOpen={setOpen}
        data={data}
        snackbarData={snackbarData}
      />
    </div>
  ) : (
    <div className={classes.paper} style={{ borderRadius: "0.63rem" }}>
      <BrandForm
        row={row}
        setOpen={setOpen}
        data={data}
        snackbarData={snackbarData}
      />
    </div>
  );

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
        open={statusOpen}
      >
        <Fade
          in={statusOpen}
          className={classes.modal}
          style={{ width: "100%", height: "100%" }}
        >
          <div className={classes.modal}>{body}</div>
        </Fade>
      </Modal>
    </div>
  );
}
