import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { HomePageOrganism } from './'
import { ThemeProvider } from '@mui/material/styles'
import customTheme from '../../../theme/customTheme'
import { fireEvent } from '@storybook/testing-library'
import {BrowserRouter} from 'react-router-dom'

const mockFunction = jest.fn()

const dummy = {
    currentLocation: "",
    jobLocation: [],
    mySkills: []
}

it('renders navbar', () => {
    render(
        <BrowserRouter>
        <ThemeProvider theme={customTheme}>
            <HomePageOrganism activeStep={0} setActiveStep={() => undefined} setDetails={() => undefined} details={dummy} />
        </ThemeProvider>
        </BrowserRouter >
    )
    const nextButton = screen.getByText(/Next/i)
    fireEvent.click(nextButton)
    // expect(mockFunction).toBeCalled()
})

it('renders navbar', () => {
    render(
        <BrowserRouter>
        <ThemeProvider theme={customTheme}>
            <HomePageOrganism activeStep={1} setActiveStep={() => undefined} setDetails={() => undefined} details={dummy} />
        </ThemeProvider>
        </BrowserRouter>
    )
    const backButton = screen.getByText(/Back/i)
    fireEvent.click(backButton)
})

it('renders navbar', () => {
    render(
        <BrowserRouter>
        <ThemeProvider theme={customTheme}>
            <HomePageOrganism activeStep={1} setActiveStep={() => undefined} setDetails={() => undefined} details={dummy} />
        </ThemeProvider>
        </BrowserRouter>
    )
})
