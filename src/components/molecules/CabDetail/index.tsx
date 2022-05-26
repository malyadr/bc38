import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'

interface CabProps {
    cab: string
    detail: string
    src: string
}

const CabDetail = ({ cab, detail, src }: CabProps) => {
    return (
        <>
            <Box
            border="1px solid black"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '60px',
                    width: '359px',
                }}
            >
                <img src={src} />
                <Box
                    component="div"
                    
                    pt="8px"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '133px',
                        height: '40px',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        position: 'relative',
                        left: '-50px',
                    }}
                >
                    <Typography variant="caption1" color="betaHigh.main">
                        {cab}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems:'center'
                        }}
                    >
                        <Typography variant="caption2" color="betaMedium.main">
                            Approximately
                        </Typography>
                        <Typography variant="caption2" color="betaHigh.main" sx={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
                            <img src="/assets/rupee.svg" />
                            {detail}
                        </Typography>
                    </Box>
                </Box>
                <Typography
                    variant="caption1"
                    color="alpha400.main"
                    sx={{
                        width: '65px',
                        display: 'flex',
                        alignItems: 'center',
                        justifySelf: 'flex-end',
                    }}
                >
                    Book Now
                </Typography>
            </Box>
        </>
    )
}

export default CabDetail
