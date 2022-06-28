import React, { useState } from 'react'
import HomePage from './components/pages/HomePage'
import LandingPage from './components/pages/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

type Step = 0 | 1 | 2

interface DetailsProps {
    currentLocation: string
    jobLocation: string[]
    mySkills: string[]
}

const defaultValue = {
    currentLocation: '',
    jobLocation: [],
    mySkills: [],
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
                    element={<HomePage details={details.currentLocation} />}
                />
            </Routes>
        </Router>
    )
}

export default App
