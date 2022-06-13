import { Typography, Chip } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { textVariant } from '../../../theme/customTheme'

interface ChipProps {
    text: string
    variant: textVariant
    styles: React.CSSProperties | null
    onDelete?: React.MouseEventHandler<HTMLButtonElement>
}

export const Chips = ({ text, variant, styles, onDelete }: ChipProps) => {
    return (
        <Chip
            sx={styles}
            label={
                <Typography variant={variant} color="betaMedium.main">
                    {text}
                </Typography>
            }
            onDelete={onDelete}
            deleteIcon={<CloseIcon sx={{ fontSize: 'small' }} />}
        />
    )
}
