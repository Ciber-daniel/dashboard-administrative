import React from "react";

import Button from "@material-ui/core/Button";
import styles from "./Button.Style";

export default function CustomButton(props) {
  const classes = styles(props);
  return (
    <Button {...props} color={props.color} width={props.width}>
      <span>{props.name}</span>
    </Button>
  );
}
