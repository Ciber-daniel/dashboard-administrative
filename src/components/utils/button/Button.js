import React from "react";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function CustomButton(props) {
  return (
    <Button {...props}>
      <span>{props.name}</span>
    </Button>
  );
}
