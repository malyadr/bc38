import { TextField } from '@mui/material'
import React from 'react'

interface InputProps {
    text: string
    variant: 'standard' | 'outlined' | 'filled'
    styles: React.CSSProperties | null
}

export const InputField = ({ text, variant, styles }: InputProps) => {
    return <TextField variant={variant} sx={styles} placeholder={text} />
}
