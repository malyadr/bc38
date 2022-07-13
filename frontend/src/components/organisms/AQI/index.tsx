import { Box } from '@mui/system'
import React from 'react'
import AqiIndicator from '../../molecules/AQIIndicator'
import { Stack, Typography } from '@mui/material'
import theme from '../../../theme/customTheme'
import {
    AQI_TITLE,
    ENTER_SKILLS,
    ENTER_LOCATION,
} from '../../../constants/constants'
import Img from '../../atoms/Image'

interface LocationProps {
    name: string
    aqi: number
}

interface SkillsProps {
    skills: string[]
    numberOfJobs: number
}

interface DetailsProps {
    currentLocation: LocationProps
    jobLocation: LocationProps[]
    mySkills: SkillsProps
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
        if (
            step === 0 &&
            details.currentLocation.name !== '' &&
            details.currentLocation.name !== null
        ) {
            return (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        gap: '32px',
                        width: '320px',
                    }}
                >
                    <AqiIndicator index={details.currentLocation.aqi.toString()} size={'large'}></AqiIndicator>
                </Box>
            )
        } else if (step === 1 && details.jobLocation.length != 0) {
            return (
                <Stack direction="column" gap="32px">
                    {details.jobLocation.map((d: LocationProps, index: number) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '100%',
                                gap: '32px',
                                width: '320px',
                            }}
                        >
                            <AqiIndicator
                                index={d.aqi.toString()}
                                size={'small'}
                            ></AqiIndicator>
                            <Typography
                                variant="h2"
                                color={theme.palette.gammaAccent2.main}
                            >
                                {d.name}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            )
        } else if (step === 2 && details.mySkills.skills.length != 0) {
            return <AqiIndicator index={details.mySkills.numberOfJobs.toString()} size={'large'}></AqiIndicator>
        } else {
            return <Img src={imgSrc()} />
        }
    }
    const jobFound = () => {
        let location1 = 'Jobs found in '
        const length = details.jobLocation.length
        for (let i = 0; i < length - 1; i++) {
            location1 += details.jobLocation[i].name
            location1 += ' and '
        }
        location1 += details.jobLocation[length - 1].name
        return location1
    }
    const condition = () => {
        if (step == 0) {
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
                    {step == 0 && details.currentLocation.name !== ''
                        ? AQI_TITLE
                        : ENTER_LOCATION}
                </Typography>
            )
        }
        if (step == 1) {
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
                    {details.jobLocation.length !== 0
                        ? AQI_TITLE
                        : ENTER_LOCATION}
                </Typography>
            )
        }
        if (step == 2) {
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
                    {details.mySkills.skills.length !== 0 ? jobFound() : ENTER_SKILLS}
                </Typography>
            )
        }
    }
    return (
        <>
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
        </>
    )
}
