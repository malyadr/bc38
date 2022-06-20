import React, { useState, useEffect } from 'react'
import { AQI } from '../../organisms/AQI';
import { HomePageOrganism } from '../../organisms/HomePageOrganism'
import LandingPageTemplate from '../../templates/LandingPageTemplate';


type Step = 0 | 1 | 2;

interface DetailsProps {
    currentLocation: string;
    jobLocation: string[];
    mySkills: string[]
}

const defaultValue = {
    currentLocation: '',
    jobLocation: [],
    mySkills: []
}

const LandingPage = () => {
    const [step, setStep] = useState<Step>(0);
    const [details, setDetails] = useState<DetailsProps>(defaultValue);

    useEffect(() => {
        console.log("details = ", details);
    console.log("step = ", step);
    }, [step])
  return (
      <>
          <LandingPageTemplate
              left={<HomePageOrganism activeStep={step} setActiveStep={setStep} setDetails={setDetails} details={details} />}
              right={<AQI step={step} details={details} />}
          />
      </>
  )
}

export default LandingPage