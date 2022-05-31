import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { Button1 } from '../../molecules/button'
import theme from '../../../theme/customTheme'
import { InputChip } from '../inputChip'
import {
    BACK,
    LANDING_TITLE,
    NEXT,
    PLACEHOLDER,
    SKIP,
    STEPPER_ONE_OPTIONS,
    STEPPER_THREE_OPTIONS,
    STEPPER_TWO_OPTIONS,
} from '../../../constants/constants'
import { STEPS, STEPPER } from '../../../constants/constants'

export const ProgressStepper = ({ additional, setAdditional }: any) => {
    const [activeStep, setActiveStep] = React.useState(0)
    const [title, setTitle] = React.useState(STEPPER[0])

    const [location, setLocation] = React.useState<string[]>([])
    const [jobLocation, setJobLocation] = React.useState<string[]>([])
    const [mySkills, setMySkills] = React.useState<string[]>([])

    React.useEffect(() => {
        setAdditional((prev: any) => {
            return { ...prev, currentLocation: location }
        })
        setAdditional((prev: any) => {
            return { ...prev, jobLocation: jobLocation }
        })
        setAdditional((prev: any) => {
            return { ...prev, skills: mySkills }
        })
    }, [])

    const updateLocation = (currLoc: string[]): void => {
        setLocation(currLoc)
    }
    const updateJobLocation = (currJobLoc: string[]): void => {
        setJobLocation(currJobLoc)
    }
    const updateSkills = (allSkills: string[]): void => {
        setMySkills(allSkills)
    }

    const handleNextTitle = () => {
        if (activeStep == 0) {
            setTitle(STEPPER[1])
        } else {
            setTitle(STEPPER[2])
        }
    }

    const handleBackTitle = () => {
        if (activeStep == 3) {
            setTitle(STEPPER[2])
        } else if (activeStep == 2) {
            setTitle(STEPPER[1])
        } else {
            setTitle(STEPPER[0])
        }
    }

    const handleNext = () => {
        handleNextTitle()
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        handleBackTitle()
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const inputChip = (activeStep: number) => {
        let placeholder = ''
        let options: string[] = []
        let updateData: any
        let uniqueKey = 0
        let backTextValue: string[] = []

        if (activeStep == 0) {
            placeholder = PLACEHOLDER[0]
            options = STEPPER_ONE_OPTIONS
            updateData = updateLocation
            uniqueKey = 0
            backTextValue = location
        }
        if (activeStep == 1) {
            placeholder = PLACEHOLDER[1]
            options = STEPPER_TWO_OPTIONS
            updateData = updateJobLocation
            uniqueKey = 1
            backTextValue = jobLocation
        }
        if (activeStep == 2) {
            placeholder = PLACEHOLDER[2]
            options = STEPPER_THREE_OPTIONS
            updateData = updateSkills
            uniqueKey = 2
            backTextValue = mySkills
        }
        return (
            <InputChip
                placeholder={placeholder}
                options={options}
                updateData={updateData}
                uniqueKey={uniqueKey}
                backTextValue={backTextValue}
            />
        )
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} connector={null}>
                {STEPS.map((label) => {
                    return (
                        <Step key={label}>
                            <StepLabel
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        color: 'beta100.main',
                                        width: '40px',
                                        height: '40px',
                                    },
                                    '& .MuiStepIcon-root.Mui-completed': {
                                        color: 'alpha300.main',
                                    },
                                    '& .MuiStepIcon-root.Mui-active': {
                                        color: 'alpha300.main',
                                    },
                                    '& .MuiStepIcon-text': {
                                        fill: 'black',
                                        width: '7px',
                                        height: '24px',
                                    },
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    color="alpha300.main"
                                >
                                    {label}
                                </Typography>
                            </StepLabel>
                        </Step>
                    )
                })}
            </Stepper>

            <Box style={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute' }}>
                    <Box component="div" style={{}}></Box>
                    <Box
                        style={{
                            width: '650px',
                            marginTop: '80px',
                            marginBottom: '64px',
                        }}
                    >
                        <Typography variant="h1" color="betaHigh.main">
                            {LANDING_TITLE}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1" color="betaHigh.main">
                            {title}
                        </Typography>
                        <Box sx={{ marginTop: '24px', marginBottom: '52px' }}>
                            {activeStep == 0 ? (
                                inputChip(0)
                            ) : activeStep == 1 ? (
                                inputChip(1)
                            ) : activeStep == 2 ? (
                                inputChip(2)
                            ) : (
                                <></>
                            )}
                        </Box>
                    </Box>
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            marginTop: '112px',
                            marginBottom: '',
                        }}
                    >
                        <Button1
                            variant={'subtitle1'}
                            TextColor={'alpha400.main'}
                            buttonVariant={'text'}
                            buttonColor={'alpha400'}
                            styles={{
                                height: '24px',
                                width: '36px',
                            }}
                        >
                            {SKIP}
                        </Button1>
                        <hr
                            style={{
                                width: '36px',
                                height: '1px',
                                background: theme.palette.alpha400.main,
                                marginLeft: '12px',
                                marginTop: '0',
                            }}
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        sx={{
                            marginTop: '356px',
                            mr: 1,
                            height: '46px',
                            width: '140px',
                        }}
                        variant="outlined"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        color="alpha300"
                    >
                        <Typography variant="caption1">{BACK}</Typography>
                    </Button>
                    <Box />
                    <Button
                        sx={{
                            marginTop: '356px',
                            height: '46px',
                            width: '140px',
                        }}
                        variant="contained"
                        disabled={activeStep === 3 || location.length == 0}
                        onClick={handleNext}
                        color="alpha300"
                    >
                        <Typography variant="caption1" color="gammaWhite.main">
                            {NEXT}
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
