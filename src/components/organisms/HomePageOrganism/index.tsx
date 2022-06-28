import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import { Typography, TextField, Autocomplete} from '@mui/material'
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
import { useNavigate } from 'react-router-dom'
import Img from '../../atoms/Image'

type Step = 0 | 1 | 2
interface DetailsProps {
    currentLocation: string
    jobLocation: string[]
    mySkills: string[]
}
type HomePageOrganismProps = {
    activeStep: 0 | 1 | 2
    setActiveStep: React.Dispatch<React.SetStateAction<Step>>
    setDetails: React.Dispatch<React.SetStateAction<DetailsProps>>
    details: DetailsProps
}
export const HomePageOrganism = ({
    activeStep,
    setActiveStep,
    setDetails,
    details,
}: HomePageOrganismProps) => {
    const setLocationValue = (location1: string) => {
        if (location1) {
            return location1
        }
        return ''
    }
    const [title, setTitle] = useState(STEPPER[0])

    const [location, setLocation] = useState<string>('')
    const [jobLocation, setJobLocation] = useState<string[]>([])
    const [mySkills, setMySkills] = useState<string[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        setDetails({ ...details, currentLocation: location })
    }, [location])

    useEffect(() => {
        setDetails({ ...details, jobLocation: jobLocation })
    }, [jobLocation])

    useEffect(() => {
        setDetails({ ...details, mySkills: mySkills })
    }, [mySkills])

    const updateLocation = (currLoc: string): void => {
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
                sx={{
                    width: {
                        md: '300px',
                        lg: '400px',
                        xl: '400px',
                    },
                }}
                value={setLocationValue(location)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{
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
        <Box
            sx={{
                display: 'flex',
                width: 'fit-content',
            }}
        >
            <Box sx={{ marginTop: '32px' }}>
                <Box
                    sx={{
                        // bgcolor: 'red',
                        width: {
                            xs: '350px',
                            sm: '400px',
                            md: '500px',
                            lg: '600px',
                        },
                        marginBottom: '64px',
                    }}
                >
                    <Img src="logo2" />
                </Box>
                <Stepper
                    activeStep={activeStep}
                    connector={null}
                    sx={{
                        display: 'flex',
                        gap: {
                            sm: '20px',
                            md: '25px',
                            lg: '32px',
                        },
                        position: 'relative',
                        right: '10px',
                    }}
                >
                    {STEPS.map((label, index) => {
                        
                        return (
                            <Step key={label}>
                                <StepLabel
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            height: '40px',
                                            width: '40px',
                                            color: 'beta100.main',
                                        },
                                        '& .MuiStepIcon-root.Mui-active': {
                                            color: 'alpha300.main',
                                        },
                                        '& .Mui-active .MuiStepIcon-text': {
                                            fill: 'white',
                                        },
                                        '& .Mui-active ,& .Mui-completed': {
                                            color: 'alpha300.main',
                                        },
                                        '& .MuiStepIcon-text': {
                                            fill: theme.palette.betaHigh.main,
                                            lineHeight: '24px',
                                            fontWeight: '500',
                                        },
                                        '& .MuiStepIcon-root.Mui-completed': {
                                            color: 'alpha300.main',
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            color:
                                                activeStep >= index
                                                    ? 'alpha300.main'
                                                    : 'betaHigh.main',
                                            fontSize: {
                                                sm: '12px',
                                                md: '14px',
                                                lg: '16px',
                                            },
                                        }}
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
                            sx={{
                                marginTop: '80px',
                                marginBottom: '64px',
                                width: {
                                    xs: '350px',
                                    sm: '400px',
                                    md: '500px',
                                    lg: '600px',
                                },
                            }}
                        >
                            <Typography
                                variant="h1"
                                color="betaHigh.main"
                                sx={{
                                    fontSize: {
                                        xs: '20px',
                                        sm: '24px',
                                        md: '28px',
                                        lg: '32px',
                                    },
                                }}
                            >
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
                                sx={{
                                    marginTop: '24px',
                                    marginBottom: '52px',
                                }}
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
                                    height: '4px',
                                    backgroundColor:
                                        theme.palette.alpha300.main,
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
        </Box>
    )
}
