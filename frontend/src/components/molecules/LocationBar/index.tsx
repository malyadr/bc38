import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import Icon from '../../atoms/Icon'

interface LocationProps {
    location: string
}

const LocationBar = ({ location }: LocationProps) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    width: '340px',
                    height: '28px',
                    borderBottom: '2px solid white',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Icon
                    src="location1"
                    sx={{ fill: 'transparent', stroke:"white" }}
                />
                <Typography
                    variant="body1"
                    sx={{
                        width: '303px',
                        color: 'white',
                    }}
                >
                    {location}
                </Typography>
            </Box>
        </>
    )
}

export default LocationBar
