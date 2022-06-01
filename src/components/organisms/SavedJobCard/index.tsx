import React from "react";
import {
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Stack,
} from "@mui/material";
import Bus from "../../../../public/assets/icons/bus.svg";
import Bike from "../../../../public/assets/icons/bike.svg";
import Car from "../../../../public/assets/icons/car.svg";
import Train from "../../../../public/assets/icons/train.svg";
import { MoreHoriz } from "@mui/icons-material";
import Icon from "../../atoms/icon";
import theme from "../../../theme/customTheme";

type props = {
  src: string;
  role: string;
  companyName: string;
  location: string;
  time: string;
  isHovered: boolean;
};

const SavedJobCard = ({
  src,
  role,
  companyName,
  location,
  time,
  isHovered,
}: props) => {
  return (
    <>
      <Card
        sx={{
          width: "571px",
          height: "159px",
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "12px",
          paddingBottom: "15px",
          paddingRight: "20px",
          paddingLeft: "20px",
          "&:hover": {
            border: "2px solid " + theme.palette.alpha200.main,
          },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <div
            style={{
              alignSelf: "flex-start",
              position: "relative",
            }}
          >
            <Box component="img" src={src} sx={{ fontSize: "45px", marginTop: "20px" }} />
          </div>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              height: "70px",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h2"
              color="betaHigh.main"
              sx={{ height: "30px" }}
            >
              {role}
            </Typography>
            <Typography
              variant="caption2"
              component="div"
              color="gammaAccent2.main"
              sx={{ height: "16px", marginTop: "4px", marginBottom: "4px" }}
            >
              {companyName}
            </Typography>
            <Typography
              variant="caption2"
              sx={{ height: "16px", marginBottom: "36px" }}
            >
              {location}
            </Typography>
            <Stack
              direction="row"
              sx={{
                width: "144px",
                height: "24px",
                display: "flex",
                justifyContent: "space-between",
                pt:'-20px'
              }}
            >
              <Icon src="/assets/icons/bus.svg" />
              <Icon src="/assets/icons/bike.svg" />
              <Icon src="/assets/icons/car.svg" />
              <Icon src="/assets/icons/train.svg" />
            </Stack>
          </CardContent>
        </Box>
        <CardActions
          sx={{
            position: "relative",
            // left: "129px",
            // right: "20px",
            // pt: "16px",
            height: "80%",
            // width: "70px",
            top:'10px',
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between"
          }}
        >
          <MoreHoriz sx={{ color: "betaMedium" }} />
          <Typography
            variant="caption1"
            color="betaMedium.main"
            sx={{ width: "fit-content" }}
          >
            {time}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default SavedJobCard;