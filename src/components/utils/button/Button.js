import React from "react";
import Button from "@material-ui/core/Button";

export default function CustomButton(props) {
  return (
    <Button {...props} color={props.color} width={props.width}>
      <span>{props.name}</span>
    </Button>
  );
}
