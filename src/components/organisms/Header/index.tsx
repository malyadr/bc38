import { Grid, GridProps, Box } from "@mui/material";
import AvatarComp from "../../atoms/Avatar";
import React from "react";
import theme from "../../../theme/customTheme";
import LocationBar from "../../molecules/LocationBar";
import { East_MAREDPALLY} from "../../../constants/constants";
import Img from "../../atoms/Image";
import Icon from "../../atoms/Icon";
export interface HeaderPropsType extends GridProps {
  height?: number | string;
  width?: number | string;
  backgroundColor?: string;
  style?: any;
  padding?: number | string;
  text?: string;
}

export default function Header({
  height = "80px", backgroundColor = `${theme.palette.alpha600.main}`, padding
}: HeaderPropsType) {
  return (
    <Grid
      container
      data-testid="topnavbar"
      sx={{
        position: "fixed",
        height: {height},
        width: '100%',
        top: 0,
        right: 0,
        backgroundColor: { backgroundColor },
        justifyContent: "space-between",
        alignItems: "center",
        padding: padding,
      }}
    >
      <Box sx={{ marginLeft: "40px", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            marginRight: "152px"
          }}
        >
        <Img src="logo1"  />
        </Box>
       <LocationBar location={East_MAREDPALLY}/>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginRight: "40px",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "12%"
        }}
      >
        <Icon src="message" sx={{ fill: 'transparent', stroke:"white" }} />
        <Icon src="notifications" sx={{ fill: 'transparent', stroke:"white" }} />
        <AvatarComp />
      </Box>
    </Grid>
  );
}