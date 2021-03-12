import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  defaultBtn: {
    width: "14rem",
    letterSpacing: "0rem",
    height: "2rem",
    color: "#ffffff",
    opacity: 1,
    background: "#A7A7A7",
    borderRadius: 21,
    marginLeft: "2%",
    textTransform: "lowercase",
    fontWeight: 300,
    fontFamily: '"Roboto", sans-serif',
  },
  degreeBtn: {
    width: "14rem",
    height: "2rem",
    background:
      "transparent linear-gradient(90deg, #63D1A2 0%, #63C3D1 100%) 0% 0% no-repeat padding-box",
    borderRadius: 21,
    opacity: 1,
    textTransform: "lowercase",
  },
  whiteBtn: {
    width: "14rem",
    height: "2rem",
    background: "#f3f3f3",
    borderRadius: 21,
    opacity: 1,
    textTransform: "lowercase",
    fontWeight: 300,
    fontFamily: '"Roboto", sans-serif',
  },
});
