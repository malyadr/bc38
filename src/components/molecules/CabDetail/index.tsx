import { Typography, SvgIcon } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import { APPROX } from '../../../constants/constants'
import Logo from '../../../../public/assets/icons/rupee.svg'

interface CabProps {
    cab: string
    detail: string
    src: string
}

const CabDetail = ({ cab, detail, src }: CabProps) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '60px',
                    width: '359px',
                }}
            >
                <Box component="img" src={src} />
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
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="caption2" color="betaMedium.main">
                            {APPROX}
                        </Typography>

                        <Typography
                            variant="caption2"
                            color="betaHigh.main"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                width: 'fit-content',
                            }}
                        >
                            <SvgIcon component={Logo} />
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
