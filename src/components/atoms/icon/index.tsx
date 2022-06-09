import { SvgIcon, SxProps, Theme } from '@mui/material'
import React from 'react'
import { Icons } from '../../../constants/constants'
import { iconType } from '../../../theme/customTheme'

interface IconProps {
    src: iconType
    sx?: SxProps<Theme>
    onClick?: React.MouseEventHandler<SVGSVGElement> 
    [key: string]: any
}

const Icon = ({ src, sx, onClick, ...other }: IconProps) => {
    return (
        <>
            <SvgIcon
                {...other}
                color="alpha500"
                sx={sx}
                htmlColor="red"
                onClick={onClick}
            >
                {Icons[src]}
            </SvgIcon>
        </>
    )
}

export default Icon
