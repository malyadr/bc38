import * as React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Current } from "../../atoms/CurrentIcon";
import { COMMON_ROUTE } from "../../../constants/constants";
import Icon from "../../atoms/icon";
import Img from "../../atoms/image";
import { Box } from "@mui/system";
const styles = makeStyles({
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
});

export const CommonRoutes = ({ from, to }: { from: string; to: string }) => {
  const classes = styles();
  return (
    <>
      <Box className={classes.flexRow} style={{ marginLeft: "1.46%" }}>
        <Icon src="assets/icons/back.svg" />
        <Typography
          variant="body1"
          sx={{ marginLeft: "1.68%" }}
          color="betaHigh.main"
        >
          {COMMON_ROUTE}
        </Typography>
      </Box>

      <Box style={{ height: "9.19%" }}>
        <Box
          style={{ marginTop: "2.75%", marginLeft: "3.14%" }}
          className={classes.flexRow}
        >
          <Current></Current>
          <Typography
            variant="caption2"
            sx={{ marginLeft: "1%" }}
            color="betaHigh.main"
          >
            {from}
          </Typography>
        </Box>
        <Box className={classes.flexRow}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "3.44%",
              justifyContent: "space-evenly",
            }}
          >
            <Img src="assets/icons/Ellipse 7.svg" />
            <Img src="assets/icons/Ellipse 7.svg" />
            <Img src="assets/icons/Ellipse 7.svg" />
          </Box>
          <Box style={{ marginLeft: "24.68%" }}>
            <Icon src="/assets/icons/swap.svg" />
          </Box>
        </Box>
        <Box
          className={classes.flexRow}
          style={{ marginLeft: "2.94%", marginBottom: "0.18%" }}
        >
          <Box>
            <Icon src="/assets/icons/location 3.svg" />
          </Box>
          <Typography
            variant="caption2"
            sx={{ marginLeft: "0.67%", marginBottom: "1.68%" }}
            color="betaHigh.main"
          >
            {to}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
