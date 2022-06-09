import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { HomePageOrganism } from './'
import { ThemeProvider } from '@mui/material/styles'
import customTheme from '../../../theme/customTheme'
import { fireEvent } from '@storybook/testing-library'

const mockFunction = jest.fn()

it('renders navbar', () => {
    render(
        <ThemeProvider theme={customTheme}>
            <HomePageOrganism step={0} />
        </ThemeProvider>
    )
    const nextButton = screen.getByText(/Next/i)
    fireEvent.click(nextButton)
    // expect(mockFunction).toBeCalled()
})

it('renders navbar', () => {
    render(
        <ThemeProvider theme={customTheme}>
            <HomePageOrganism step={1} />
        </ThemeProvider>
    )
    const backButton = screen.getByText(/Back/i)
    fireEvent.click(backButton)
})

it('renders navbar', () => {
    render(
        <ThemeProvider theme={customTheme}>
            <HomePageOrganism step={2} />
        </ThemeProvider>
    )
})
