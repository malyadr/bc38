import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const styles = makeStyles({
  root: {
    backgroundColor: "#E8FFFC",
    // borderRadius: "8px",
  },
});

const handleDelete = () => {
  console.log("hi");
};

export const Chips = ({ color, text, variant }: any) => {
  const classes = styles();
  return (
    <div>
      <Chip
        // className={classes.root}
        style={{ backgroundColor: "#E8FFFC", width: "159px", height: "32px" }}
        label={
          <Typography variant={variant} className={classes.root} color={color}>
            Graphic Designer
          </Typography>
        }
        onDelete={handleDelete}
        deleteIcon={<CloseIcon sx={{ fontSize: "small" }} />}
      ></Chip>
    </div>
  );
};
