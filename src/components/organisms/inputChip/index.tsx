/* eslint-disable react/jsx-key */
import { TextField, Typography } from '@mui/material'
import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { Chips } from '../../molecules/chips'

const style = {
    width: '420px',
    height: '48px',
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'alpha200.main',
        },
    },
}

interface InputChipProps {
    placeholder: string
    options: string[]
    updateData: (arg: string[]) => void
    uniqueKey: number
    backTextValue: string[]
}
export const InputChip = ({
    placeholder,
    updateData,
    options,
    uniqueKey,
    backTextValue,
}: InputChipProps) => {
    return (
        <>
            <Autocomplete
                key={uniqueKey}
                multiple
                id="tags-filled"
                options={options}
                freeSolo
                value={backTextValue}
                onChange={(_event, value) => {
                    updateData(value)
                    placeholder = ''
                }}
                renderTags={(value: readonly string[], getTagProps) => {
                    if (uniqueKey != 0) {
                        return value.map((option: string, index: number) => (
                            <Chips
                                variant="caption2"
                                text={option}
                                styles={{
                                    height: '32px',
                                    width: 'fit-content',
                                    backgroundColor: 'gammaColor1.main',
                                    borderRadius: '8px',
                                    padding: '5px',
                                    marginRight: '5px',
                                }}
                                {...getTagProps({ index })}
                            />
                        ))
                    } else {
                        return value.map((option: string, index: number) => (
                            <Typography
                                key={index}
                                variant="caption2"
                                color="betaLow.main"
                            >
                                {option}
                            </Typography>
                        ))
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        placeholder={
                            backTextValue.length == 0 ? placeholder : ''
                        }
                        sx={style}
                    />
                )}
            />
        </>
    )
}
