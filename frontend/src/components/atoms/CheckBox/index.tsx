import React, { useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox'

interface Props {
    defaultChecked: boolean
}

const ControlledCheckbox = ({ defaultChecked }: Props) => {
    const [checked, setChecked] = React.useState(defaultChecked)

    useEffect(() => {
        setChecked(defaultChecked)
    }, [defaultChecked])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{
                color: 'beta400.main',
                '&.Mui-checked': {
                    color: 'alpha400.main',
                },
            }}
        />
    )
}

export default ControlledCheckbox
