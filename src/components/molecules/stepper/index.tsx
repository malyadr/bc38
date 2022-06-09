import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { NEXT, BACK, STEPS } from '../../../constants/constants'

const steps = STEPS

interface ProgressStepperProps {
    step: number
}

const ProgressStepper = ({ step }: ProgressStepperProps) => {
    const [activeStep, setActiveStep] = React.useState(step)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} connector={null}>
                {steps.map((label) => {
                    return (
                        <Step key={label} sx={{}}>
                            <StepLabel
                                sx={{
                                    color: 'alpha300.main',
                                    '& .MuiSvgIcon-root': {
                                        color: 'alpha300.main',
                                        width: '40px',
                                        height: '40px',
                                    },
                                    '& .MuiStepIcon-root.Mui-completed': {
                                        color: 'alpha300.main',
                                    },
                                    '& .MuiStepIcon-root.Mui-active': {
                                        color: 'alpha300.main',
                                    },
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    color="alpha600.main"
                                >
                                    {label}
                                </Typography>
                            </StepLabel>
                        </Step>
                    )
                })}
            </Stepper>

            <React.Fragment>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        pt: 2,
                        marginTop: '356px',
                    }}
                >
                    {activeStep !== 0 && (
                        <Button
                            variant="outlined"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            color="alpha300"
                            sx={{ mr: 1, width: '140px', height: '46px' }}
                        >
                            <Typography variant="caption1">{BACK}</Typography>
                        </Button>
                    )}
                    <Box />
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        color="alpha300"
                        sx={{ width: '140px', height: '46px' }}
                    >
                        <Typography variant="caption1" color="gammaWhite.main">
                            {NEXT}
                        </Typography>
                    </Button>
                </Box>
            </React.Fragment>
        </Box>
    )
}

export default ProgressStepper
