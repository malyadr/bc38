import React from "react";
import { makeStyles } from "@mui/styles";
import theme from "../../../theme/customTheme";

const styles = makeStyles({
  outerCircle: {
    background: theme.palette.beta400.main,
    borderRadius: "50%",
    height: "16px",
    width: "16px",
    position: "relative",
  },
  innerCircle: {
    position: "absolute",
    background: theme.palette.gammaWhite.main,
    borderRadius: "50%",
    height: "8px",
    width: "8px",
    top: "50%",
    left: "50%",
    margin: "-4px 0px 0px -4px",
  },
});

export const Current = () => {
  const classes = styles();
  return (
    <div className={classes.outerCircle}>
      <div className={classes.innerCircle}></div>
    </div>
  );
};
