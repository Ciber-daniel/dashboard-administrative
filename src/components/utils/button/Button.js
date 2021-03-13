import React from "react";
import Button from "@material-ui/core/Button";

export default function CustomButton(props) {
  return (
    <div>
      <Button {...props}>
        <span>{props.name}</span>
      </Button>
    </div>
  );
}
