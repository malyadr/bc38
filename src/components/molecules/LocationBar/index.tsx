import { Box, SvgIcon } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import Icon from '../../atoms/icon'

interface LocationProps {
    location: string;
}


const LocationBar = ({location}: LocationProps) => {
    return (
        <>
            <Box
                sx={{
                    background: 'alpha600.main',
                    display: 'flex',
                    width: '340px',
                    height: '28px',
                    borderBottom: '2px solid black',
                    justifyContent: 'flex-start',
                }}
            >
                <img src='/assets/location.svg' />
                <Typography
                    variant="body1"
                    sx={{
                        background: '#0B6D62',
                        color: 'white',
                        width: '233px',
                        pl: '15px',
                        pt: '5px',
                    }}
                >
                    {location}
                </Typography>
            </Box>
        </>
    )
}

export default LocationBar

//
