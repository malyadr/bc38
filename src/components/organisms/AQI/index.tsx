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

interface DetailsProps {
    currentLocation: string
    jobLocation: string[]
    mySkills: string[]
}

interface AqiProps {
    details: DetailsProps
    step: 0 | 1 | 2
}

export const AQI = ({ details, step }: AqiProps) => {
    const imgSrc = () => {
        if (step == 0) return 'stay'
        else if (step == 1) return 'work'
        else return 'jobs'
    }
    const renderComponent = () => {
        if (step === 0 && details.currentLocation !== '' && details.currentLocation !== null) {
            return (
                <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    gap: '32px',
                    width: '320px'
                }}
            >
                <AqiIndicator
                    index={'500'}
                    size={'large'}
                ></AqiIndicator>
            </Box>)
            } else if (step === 1 && details.jobLocation.length != 0 ) {
                return (
                    <Box>
                        {details.jobLocation.map((d: any) => (
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
                                    size={'small'}
                                ></AqiIndicator>
                                    <Typography
                                        variant="h2"
                                        color={theme.palette.gammaAccent2.main}
                                    >
                                        {d}
                                    </Typography>
                            </Box>
                        ))}
                    </Box>
                )
            } else if (step === 2 && details.mySkills.length != 0) {
                return <AqiIndicator index={'6'} size={'large'}></AqiIndicator>
            } else {
            return <Img src={imgSrc()} />
            }
    }
    const condition = () => {
        if (details.mySkills.length !== 0) {
            return (
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
            )
        } else {
            return (
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
            )
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

            {condition()}
        </Box>
    )
}