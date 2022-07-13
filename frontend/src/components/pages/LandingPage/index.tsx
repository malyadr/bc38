import React, { useState, useEffect } from 'react'
import { AQI } from '../../organisms/AQI'
import { HomePageOrganism } from '../../organisms/HomePageOrganism'
import LandingPageTemplate from '../../templates/LandingPageTemplate'

type Step = 0 | 1 | 2
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

const defaultValue = {
    currentLocation: { name: '', aqi: 0 },
    jobLocation: [],
    mySkills: { skills: [], numberOfJobs: 0 },
}

interface LandingPageProps {
    setDetails: React.Dispatch<React.SetStateAction<DetailsProps>>
    details: DetailsProps
}
const LandingPage = ({ details, setDetails }: LandingPageProps) => {
    const [step, setStep] = useState<Step>(0)

    useEffect(() => {
        console.log('details = ', details)
        console.log('step = ', step)
    }, [step])
    return (
        <>
            <LandingPageTemplate
                left={
                    <HomePageOrganism
                        activeStep={step}
                        setActiveStep={setStep}
                        setDetails={setDetails}
                        details={details}
                    />
                }
                right={<AQI step={step} details={details} />}
            />
        </>
    )
}

export default LandingPage
