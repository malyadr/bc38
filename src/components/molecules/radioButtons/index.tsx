import * as React from 'react'
import Radio from '@mui/material/Radio'

interface Props {
    value: string
}

const RadioButtons = ({ value }: Props) => {
    const [selectedValue, setSelectedValue] = React.useState('yes')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value)
    }

    return (
        <>
            <Radio
                checked={selectedValue === value}
                onChange={handleChange}
                value={value}
                name="radio-buttons"
                sx={{
                    color: 'beta400.main',
                    '&.Mui-checked': {
                        color: 'alpha400.main',
                    },
                }}
            />
        </>
    )
}

export default RadioButtons
