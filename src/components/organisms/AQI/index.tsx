import { Box } from '@mui/system'
import React from 'react'
import AqiIndicator from '../../molecules/AQIIndicator'
import currentLocation from '../../../../public/assets/images/Group 10.jpg'
import jobLocation from '../../../../public/assets/images/Group 105.jpg'
import skills from '../../../../public/assets/images/Group 72.jpg'
import { Typography } from '@mui/material'
import theme from '../../../theme/customTheme'
import { AQI_TITLE } from '../../../constants/constants'

export const AQI = ({ details, step }: any) => {
    return (
        <Box
            style={{
                marginLeft: '181px',
            }}
        >
            {details.length != 0 && step != 2 ? (
                details.map((d: any) => (
                    <Box
                        key={d.id}
                        sx={{
                            display: 'flex',
                            marginBottom: '15px',
                            marginTop: '15px',
                        }}
                    >
                        <AqiIndicator
                            index={Math.floor(Math.random() * 1000).toString()}
                            size={step == 0 ? 'large' : 'small'}
                        ></AqiIndicator>
                        {step == 1 && (
                            <Typography
                                variant="h2"
                                color={theme.palette.gammaAccent2.main}
                                sx={{ marginTop: '50px', marginLeft: '20px' }}
                            >
                                {d}
                            </Typography>
                        )}
                    </Box>
                ))
            ) : details.length != 0 && step == 2 ? (
                <AqiIndicator
                    index={Math.floor(Math.random() * 10).toString()}
                    size={step == 0 ? 'large' : 'small'}
                ></AqiIndicator>
            ) : (
                <img
                    src={
                        step == 0
                            ? currentLocation
                            : step == 1
                            ? jobLocation
                            : skills
                    }
                />
            )}
            {details.length != 0 && (
                <Typography
                    variant="h2"
                    sx={{
                        marginTop: '40px',
                        width: '369px',
                        color: theme.palette.betaHigh.main,
                    }}
                >
                    {step == 2 ? 'Jobs found in Hyderabad & Mumbai' : AQI_TITLE}
                </Typography>
            )}
        </Box>
    )
}
