import { Grid, GridProps, Box, TextField, SvgIcon } from "@mui/material";
import {default as logo} from "../../../../public/assets/icons/Logo 2.svg";
import notifications from "../../../../public/assets/icons/notifications.svg";
import AvatarComp from "../../atoms/avatar";
import React from "react";
import theme from "../../../theme/customTheme";
import LocationBar from "../../molecules/LocationBar";
import { default as message } from '../../../../public/assets/icons/message.svg'
import { GREENCOMMUTE ,East_MAREDPALLY} from "../../../constants/constants";

export interface HeaderPropsType extends GridProps {
  height?: number | string;
  width?: number | string;
  backgroundColor?: string;
  style?: any;
  padding?: number | string;
  text?: string;
}

export default function TopNavbar({
  height = "80px", width, backgroundColor = `${theme.palette.alpha600.main}`, padding, text,
}: HeaderPropsType) {
  return (
    <Grid
      container
      data-testid="topnavbar"
      sx={{
        position: "absolute",
        height: height,
        width: width,
        top: 0,
        right: 0,
        backgroundColor: { backgroundColor },
        justifyContent: "space-between",
        alignItems: "center",
        padding: padding
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
          <SvgIcon
                    component={logo}
                    fill="yellow"
                    stroke="white"
                    sx={{ fill: 'transparent' }}
                />
          <Box
            sx={{
              fontFamily: "Neucha",
              color: theme.palette.gammaWhite.main,
              fontSize: "24px",
              lineHeight: "32px",
              marginLeft: "4px"
            }}
          >
            {GREENCOMMUTE}
          </Box>
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
        <SvgIcon
                    component={message}
                    fill="yellow"
                    stroke="white"
                    sx={{ fill: 'transparent' }}
                />
        <SvgIcon
                    component={notifications}
                    fill="yellow"
                    stroke="white"
                    sx={{ fill: 'transparent' }}
                />
        <AvatarComp />
      </Box>
    </Grid>
  );
}