/* eslint-disable react/jsx-key */
import { TextField } from '@mui/material'
import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { Chips } from '../../molecules/Chips'

const style = {
    width: '420px',
    height: '48px',
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'alpha200.main',
        },
    },
}

const emptyString = "";

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
                data-testid="autocomplete"
                onChange={(_event, value) => {
                    updateData(value)
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
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        sx={style}
                        placeholder={
                            backTextValue.length == 0
                                ? placeholder
                                : emptyString
                        }
                    />
                )}
            />
        </>
    )
}
