import { Box, SxProps, Theme } from "@mui/material";
import React from "react";
import {Logos} from '../../../constants/constants'
import { imageTypes } from "../../../theme/customTheme";

interface imgProps {
    
    src: imageTypes,
    sx?: SxProps<Theme> | undefined
   
}

const Img = ({src, sx}:imgProps) => {
    return (
    <>
     <Box component="img" src={Logos[src].type} sx={sx} data-testid="img" alt="no image"/>
    </>

    )
   
    
}

export default Img;