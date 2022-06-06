import { SvgIcon, SxProps, Theme } from "@mui/material";
import React from "react";
import {Icons} from '../../../constants/constants'
import { iconType } from '../../../theme/customTheme'

interface IconProps  {
    src:  iconType;
    sx?: SxProps<Theme> | undefined;
    onClick?: React.MouseEventHandler<SVGSVGElement> | undefined;
    alt?: string | undefined

};


const Icon = ({src, sx, onClick, alt}: IconProps) => {
    return (
        <>        
            <SvgIcon color="alpha500" sx={sx} htmlColor="red" onClick={onClick} data-testid={alt}>{Icons[src]}</SvgIcon>
        </>

    )
};

export default Icon;