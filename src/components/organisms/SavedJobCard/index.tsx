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
  SvgIcon,
} from "@mui/material";
import Icon from "../../atoms/icon";
import theme, { imageTypes } from "../../../theme/customTheme";
import Img from "../../atoms/image";

interface props  {
  src: imageTypes;
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
          maxWidth: "571px",
          height: "159px",
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "12px",
          paddingBottom: "15px",
          paddingRight: "20px",
          paddingLeft: "20px",
          background:'gammaWhite.main',
          "&:hover": {
            borderColor:'gammaAccent1.main',
            borderWidth:'2px',
            borderStyle:'solid'

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
            <Img src={src} sx={{ fontSize: "45px", marginTop: "20px" }} />
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
              <Icon src="bus" />
              <Icon src="train" />
              <Icon src="car" />
              <Icon src="bike" />
            </Stack>
          </CardContent>
        </Box>
        <CardActions
          sx={{
            position: "relative",
            height: "80%",
            top:'10px',
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between"
          }}
        >
          <Icon src="more" sx={{ color: "betaMedium" }} />
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