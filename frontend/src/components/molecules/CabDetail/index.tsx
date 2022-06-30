import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import { APPROX } from '../../../constants/constants'
import { imageTypes } from '../../../theme/customTheme'
import Icon from '../../atoms/Icon'
import Img from '../../atoms/Image'
import { Button1 } from '../Button'

interface CabProps {
    cab: string
    detail: string
    src: imageTypes
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
                    bgcolor: 'gammaWhite.main',
                    boxShadow: '0px 2px 8px rgba(125, 125, 125, 0.12)',
                }}
            >
                <Img
                    src={src}
                    sx={{ width: '40px', height: '40px', pr: '5px' }}
                />
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
                            <Icon
                                src="rupee"
                                sx={{ position: 'relative', left: '5px' }}
                            />
                            {detail}
                        </Typography>
                    </Box>
                </Box>
                <Button1
                    variant={'caption1'}
                    buttonVariant={'text'}
                    buttonColor={'alpha400'}
                    styles={{ width: 'fit-content' }}
                >
                    Book Now
                </Button1>
            </Box>
        </>
    )
}

export default CabDetail
