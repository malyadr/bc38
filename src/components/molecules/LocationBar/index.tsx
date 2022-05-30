import { Box, SvgIcon } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import { default as Location } from '../../../../public/assets/icons/location.svg'

interface LocationProps {
    location: string
}

const LocationBar = ({ location }: LocationProps) => {
    return (
        <>
            <Box
                sx={{
                    bgcolor: 'alpha600.main',
                    display: 'flex',
                    width: '340px',
                    height: '28px',
                    borderBottom: '2px solid white',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <SvgIcon
                    component={Location}
                    fill="yellow"
                    stroke="white"
                    sx={{ fill: 'transparent' }}
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
