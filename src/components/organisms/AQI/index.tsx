import { Box } from '@mui/system'
import React from 'react'
import AqiIndicator from '../../molecules/AQIIndicator'
import { Typography } from '@mui/material'
import theme from '../../../theme/customTheme'
import { AQI_TITLE } from '../../../constants/constants'
import Img from '../../atoms/image'

export const AQI = ({ details, step }: any) => {
    

    return (
        <Box
            sx={{
                display:'flex',
                alignItems:'center',
                flexDirection:'column',
                gap:'32px',
            }}
        >
            {details.length != 0 && step != 2 ? (
                details.map((d: any) => (
                    <Box
                        key={d.id}
                        sx={{
                            display: 'flex',
                            alignItems:'center',
                            height:'100%',
                            gap:'32px',
                            width:'320px'
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
                <Img
                    src={
                        step == 0
                            ? "stay"
                            : step == 1
                            ? "work"
                            : "jobs"
                    }
                />
            )}
            {details.length != 0 && (
                <Typography
                    variant="h2"
                    sx={{
                        textAlign:'center',
                        marginTop: '60px',
                        width: '325px',
                        color: theme.palette.betaHigh.main,
                    }}
                >
                    {step == 2 ? 'Jobs found in Hyderabad & Mumbai' : AQI_TITLE}
                </Typography>
            )}
            {details.length == 0 && (
                <Typography
                    variant="h2"
                    color="betaHigh"
                    sx={{
                        textAlign:'center',
                        marginTop: '60px',
                        width: (step != 2) ? '281px': "363px",
                    }}
                >
                    {step != 2 ? 'Enter Location to know Time Air Quality Index (AQI)' : 'Enter your Skills to know how many jobs are in this Location'}
                </Typography>
            )}
        </Box>
    )
}
