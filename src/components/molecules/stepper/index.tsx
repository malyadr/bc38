import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { NEXT, BACK, STEPS } from '../../../constants/constants'

const steps = STEPS

const ProgressStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0)

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
                    <Button
                        variant="outlined"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        color="alpha300"
                        sx={{ mr: 1, width: '140px', height: '46px' }}
                    >
                        <Typography variant="caption1">{BACK}</Typography>
                    </Button>
                    <Box />
                    <Button
                        variant="contained"
                        disabled={activeStep === 3}
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
