import React from "react";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const MyButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "12rem",
  letterSpacing: "0rem",
  height: "2.3rem",
  color: "black",
  boxshadow: "0rem 0.1rem 0.3rem #00000029",
  opacity: 1,
  background: "green",
  borderRadius: "1rem",
  transition: "all 0.6s",
});

export default function CustomButton(props) {
  return (
    <MyButton color={props.color} width={props.width}>
      {props.name}
    </MyButton>
  );
}
