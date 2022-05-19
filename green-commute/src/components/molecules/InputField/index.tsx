import { TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  outlined: {
    position: "absolute",
    width: "400px",
    height: "48px",
    left: "0px",
    top: "0px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E9EBE9",
    borderRadius: "8px",
  },
});

export const InputField = ({ text, variant }: any) => {
  const classes = styles();

  return (
    <div>
      <TextField
        variant={variant}
        className={classes.outlined}
        placeholder={text}
      ></TextField>
    </div>
  );
};
