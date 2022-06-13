import { Box } from '@mui/system'
import React from 'react'
import AqiIndicator from '../../molecules/AQIIndicator'
import { Typography } from '@mui/material'
import theme from '../../../theme/customTheme'
import {
    AQI_TITLE,
    ENTER_SKILLS,
    ENTER_LOCATION,
} from '../../../constants/constants'
import Img from '../../atoms/Image'

interface AqiProps {
    details: string[]
    step: 0 | 1 | 2
}

export const AQI = ({ details, step }: AqiProps) => {
    const imgSrc = () => {
        if (step == 0) return 'stay'
        else if (step == 1) return 'work'
        else return 'jobs'
    }
    const renderComponent = () => {
        if (details.length != 0) {
            if (step != 2) {
                return (
                    <Box>
                        {details.map((d: any) => (
                            <Box
                                key={d.id}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '100%',
                                    gap: '32px',
                                    width: '320px',
                                }}
                            >
                                <AqiIndicator
                                    index={'500'}
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
                        ))}
                    </Box>
                )
            } else {
                return <AqiIndicator index={'6'} size={'large'}></AqiIndicator>
            }
        } else {
            return <Img src={imgSrc()} />
        }
    }
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '32px',
            }}
        >
            {renderComponent()}

            {details.length != 0 ? (
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        marginTop: '60px',
                        width: '325px',
                        color: theme.palette.betaHigh.main,
                    }}
                >
                    {step == 2 ? 'Jobs found in Hyderabad & Mumbai' : AQI_TITLE}
                </Typography>
            ) : (
                <Typography
                    variant="h2"
                    color="betaHigh"
                    sx={{
                        textAlign: 'center',
                        marginTop: '60px',
                        width: step != 2 ? '281px' : '363px',
                    }}
                >
                    {step != 2 ? ENTER_LOCATION : ENTER_SKILLS}
                </Typography>
            )}
        </Box>
    )
}
