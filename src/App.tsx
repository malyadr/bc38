import React from 'react'
import HomePage from './components/pages/HomePage';
import LandingPage from './components/pages/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/findJobs" element={<HomePage />} />
            </Routes>
        </Router>
   )
}

export default App
