import React, { useState } from 'react'
import HomePage from './components/pages/HomePage'
import LandingPage from './components/pages/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

type Step = 0 | 1 | 2

interface LocationProps {
    name: string;
    aqi: number;
}

interface SkillsProps {
    skills: string[],
    numberOfJobs: number;
}

interface DetailsProps {
    currentLocation: LocationProps;
    jobLocation: LocationProps[];
    mySkills: SkillsProps;
}

const defaultValue = {
    currentLocation: {name: '', aqi: 0},
    jobLocation: [],
    mySkills: {skills: [], numberOfJobs: 0},
}

function App() {
    const [details, setDetails] = useState<DetailsProps>(defaultValue)
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <LandingPage
                            details={details}
                            setDetails={setDetails}
                        />
                    }
                />
                <Route
                    path="/findJobs"
                    element={<HomePage details={details.currentLocation.name} />}
                />
            </Routes>
        </Router>
    )
}

export default App
