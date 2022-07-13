import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { HomePageOrganism } from './'
import { ThemeProvider } from '@mui/material/styles'
import customTheme from '../../../theme/customTheme'
import { fireEvent } from '@storybook/testing-library'
import { BrowserRouter } from 'react-router-dom'

const mockFunction = jest.fn()

const dummy = {
    currentLocation: {
        name: 'hyderabad',
        aqi: 894,
    },
    jobLocation: [
        {
            name: 'hyderabad',
            aqi: 894,
        },
    ],
    mySkills: {
        skills: ['ux'],
        numberOfJobs: 5,
    },
}

it('renders navbar', () => {
    render(
        <BrowserRouter>
            <ThemeProvider theme={customTheme}>
                <HomePageOrganism
                    activeStep={0}
                    setActiveStep={() => undefined}
                    setDetails={() => undefined}
                    details={dummy}
                />
            </ThemeProvider>
        </BrowserRouter>
    )
    const nextButton = screen.getByText(/Next/i)
    fireEvent.click(nextButton)
})

it('renders navbar', () => {
    render(
        <BrowserRouter>
            <ThemeProvider theme={customTheme}>
                <HomePageOrganism
                    activeStep={1}
                    setActiveStep={() => undefined}
                    setDetails={() => undefined}
                    details={dummy}
                />
            </ThemeProvider>
        </BrowserRouter>
    )
    const backButton = screen.getByText(/Back/i)
    fireEvent.click(backButton)
    const Next = screen.getByText(/Next/i)
    fireEvent.click(Next)
})

it('renders navbar', () => {
    render(
        <BrowserRouter>
            <ThemeProvider theme={customTheme}>
                <HomePageOrganism
                    activeStep={2}
                    setActiveStep={() => undefined}
                    setDetails={() => undefined}
                    details={dummy}
                />
            </ThemeProvider>
        </BrowserRouter>
    )
})
