import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  defaultBtn: {
    width: "14rem",
    letterSpacing: "0rem",
    height: "2rem",
    color: "#ffffff",
    opacity: 1,
    background: "linear-gradient(90deg, #63d1a2 0%, #63c3d1 100%)",
    borderRadius: 21,
    marginLeft: "1rem",
    textTransform: "lowercase",
    fontWeight: 300,
    fontFamily: '"Roboto", sans-serif',
    "&:hover": {
      background: "linear-gradient(90deg, #13d5a5 0%, #13c5d5 100%)",
    },
    "&:disabled": {
      background: "#A7A7A7",
    },
  },
  redBtn: {
    width: "14rem",
    height: "2rem",
    background: "#D44141",
    borderRadius: 21,
    marginLeft: "2%",
    opacity: 1,
    textTransform: "lowercase",
    color: "#ffffff",
    fontWeight: 300,
    fontFamily: '"Roboto", sans-serif',
    "&:hover": {
      background: "#D44141",
    },
  },
  whiteBtn: {
    color: "inherit",
    width: "14rem",
    height: "2rem",
    background: "transparent",
    borderRadius: 21,
    opacity: 1,
    textTransform: "lowercase",
    fontWeight: 300,
    fontFamily: '"Roboto", sans-serif',
  },
});
