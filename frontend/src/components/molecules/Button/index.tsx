import React from 'react'
import { Button, Typography } from '@mui/material'
import { textVariant, color, textColor } from '../../../theme/customTheme'

interface ButtonProps {
    variant: textVariant
    TextColor?: textColor
    buttonVariant: 'text' | 'contained' | 'outlined'
    buttonColor: color
    children: React.ReactNode
    styles: React.CSSProperties | null
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    disabled?:boolean
}

export const Button1 = ({
    variant,
    buttonVariant,
    buttonColor,
    children,
    styles,
    onClick,
    disabled
}: ButtonProps) => {
    return (
        <>
            <Button
                sx={styles}
                variant={buttonVariant}
                color={buttonColor}
                onClick={onClick}
                style={{ borderRadius: '8px' }}
                disabled={disabled}
            >
                <Typography
                    variant={variant}
                    color={
                        buttonVariant === 'contained'
                            ? 'gammaWhite.main'
                            : 'alpha400.main'
                    }
                >
                    {children}
                </Typography>
            </Button>
        </>
    )
}
