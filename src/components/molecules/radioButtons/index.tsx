import * as React from 'react'
import Radio from '@mui/material/Radio'

interface Props {
    value: boolean
}

const RadioButtons = ({ value }: Props) => {
    const [selectedValue, setSelectedValue] = React.useState<boolean>(value)

    const handleChange = () => {
       setSelectedValue(!selectedValue);
    }

    return (
        <>
            <Radio
                checked={selectedValue === value}
                onClick={handleChange}
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
