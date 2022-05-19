import React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles, ThemeProvider } from "@mui/styles";
import theme from "../../../theme/customTheme";

const styles = makeStyles({
  contained: {
    position: "absolute",
    width: "150px",
    height: "40px",
    left: "20px",
    top: "20px",
    borderRadius: "8px",
  },
  outlined: {
    position: "absolute",
    width: "92px",
    height: "32px",
    left: "191px",
    top: "76px",
  },
});

export const Button1 = ({
  variant,
  customStyle,
  buttonVariant,
  buttonColor,
  children,
}: any) => {
  const classes = styles();
  return (
    <div>
      <Button
        className={
          variant === "contained" ? classes.contained : classes.outlined
        }
        variant={buttonVariant}
        color={buttonColor}
      >
        <Typography variant={variant} style={customStyle}>
          {children}
        </Typography>
      </Button>
    </div>
  );
};
