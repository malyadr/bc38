import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import { Typography, TextField, Autocomplete } from '@mui/material'
import { Button1 } from '../../molecules/Button'
import theme from '../../../theme/customTheme'
import { InputChip } from '../InputChip'
import {
    BACK,
    LANDING_TITLE,
    NEXT,
    PLACEHOLDER,
    SKIP,
    STEPPER_ONE_OPTIONS,
    STEPPER_THREE_OPTIONS,
    STEPPER_TWO_OPTIONS,
    STEPS,
    STEPPER,
} from '../../../constants/constants'
import { useNavigate } from 'react-router-dom';

type Step = 0 | 1 | 2;
interface DetailsProps {
    currentLocation: string
    jobLocation: string[]
    mySkills: string[]
}

type HomePageOrganismProps = {
    activeStep: 0 | 1 | 2
    setActiveStep: React.Dispatch<React.SetStateAction<Step>>,
    setDetails: React.Dispatch<React.SetStateAction<DetailsProps>>
    details: DetailsProps
}
export const HomePageOrganism = ({ activeStep, setActiveStep, setDetails, details }: HomePageOrganismProps) => {
    const [title, setTitle] = useState(STEPPER[0])

    const [location, setLocation] = useState<string>('')
    const [jobLocation, setJobLocation] = useState<string[]>([])
    const [mySkills, setMySkills] = useState<string[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        setDetails({ ...details, currentLocation: location })
    }, [location])

    useEffect(() => {
         let job = jobLocation
        setDetails({ ...details, jobLocation: job })
        console.log('job = ', job);
    }, [jobLocation])

    useEffect(() => {
         let skills = mySkills
         setDetails({ ...details, mySkills: skills })
        console.log('skills = ', mySkills)
    }, [mySkills])

    const updateLocation = (currLoc: string): void => {
        setLocation(currLoc)
        
    }
    const updateJobLocation = (currJobLoc: string[]): void => {
        setJobLocation(currJobLoc)
        console.log('job location = ', jobLocation);
        console.log('curr = ', currJobLoc);
    }
    const updateSkills = (allSkills: string[]): void => {
        setMySkills(allSkills)
        console.log("skills = ", mySkills);
    }

    const handleNextTitle = () => {
        if (activeStep == 0) {
            setTitle(STEPPER[1])
        } else {
            setTitle(STEPPER[2])
        }
    }

    const handleBackTitle = () => {
        if (activeStep == 2) {
            setTitle(STEPPER[1])
        } else {
            setTitle(STEPPER[0])
        }
    }

    const handleNext = () => {
        handleNextTitle()
        setActiveStep((prevActiveStep) => {
            return prevActiveStep == 0 ? 1 : 2
        })
    }

    const handleBack = () => {
        handleBackTitle()
        setActiveStep((prevActiveStep) => (prevActiveStep == 1 ? 0 : 1))
    }

    const inputChip = (ActiveStep: number) => {
        let placeholder = ''
        let options: string[] = []
        let updateData: any
        let uniqueKey = 0
        let backTextValue: string[] = []

        if (ActiveStep == 0) {
            placeholder = PLACEHOLDER[0]
            options = STEPPER_ONE_OPTIONS
            updateData = updateLocation
            // backTextValue = location
        }
        if (ActiveStep == 1) {
            placeholder = PLACEHOLDER[1]
            options = STEPPER_TWO_OPTIONS
            updateData = updateJobLocation
            uniqueKey = 1
            backTextValue = details.jobLocation
        }
        if (ActiveStep == 2) {
            placeholder = PLACEHOLDER[2]
            options = STEPPER_THREE_OPTIONS
            updateData = updateSkills
            uniqueKey = 2
            backTextValue = details.mySkills
        }
        return ActiveStep != 0 ? (
            <InputChip
                placeholder={placeholder}
                options={options}
                updateData={updateData}
                uniqueKey={uniqueKey}
                backTextValue={backTextValue}
            />
        ) : (
            <Autocomplete
                freeSolo
                options={options}
                onChange={(_event, value) => {
                    updateData(value)
                }}
                value={location ? location : ''}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{
                            width: '420px',
                            height: '48px',
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: 'alpha200.main',
                                },
                            },
                        }}
                        placeholder={placeholder}
                    />
                )}
            />
        )
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '55%',  marginTop: '100px' }}>
                <Stepper activeStep={activeStep} connector={null}>
                    {STEPS.map((label) => {
                        return (
                            <Step key={label}>
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
                        <Box component="div"></Box>
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
                            <Typography
                                variant="subtitle1"
                                color="betaHigh.main"
                            >
                                {title}
                            </Typography>
                            <Box
                                sx={{ marginTop: '24px', marginBottom: '52px' }}
                            >
                                {inputChip(activeStep)}
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
                        {activeStep != 0 && (
                            <Button
                                sx={{
                                    marginTop: '356px',
                                    mr: 1,
                                    height: '46px',
                                    width: '140px',
                                }}
                                variant="outlined"
                                onClick={handleBack}
                                color="alpha300"
                            >
                                <Typography variant="caption1">
                                    {BACK}
                                </Typography>
                            </Button>
                        )}
                        <Box />
                        <Button
                            sx={{
                                marginTop: '356px',
                                height: '46px',
                                width: '140px',
                            }}
                            variant="contained"
                            onClick={
                                activeStep < 2
                                    ? handleNext
                                    : () => {
                                            navigate('/findjobs')
                                      }
                            }
                            color="alpha300"
                        >
                            <Typography
                                variant="caption1"
                                color="gammaWhite.main"
                            >
                                {NEXT}
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
            {/* <Box
                sx={{
                    backgroundColor: theme.palette.gammaColor1.main,
                    width: '45%',
                    height: '100vh',
                    display: 'flex',
                    paddingTop: '200px',
                }}
            >
                <AQI
                    details={
                        activeStep == 0
                            ? location
                            : activeStep == 1
                            ? jobLocation
                            : mySkills
                    }
                    step={activeStep}
                ></AQI>
            </Box> */}
        </Box>
    )
}
