import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import DetailCard from '.'
import React from 'react'
import customTheme from '../../../theme/customTheme'
import '@testing-library/jest-dom'

describe('Detail Job Card Test', () => {
    test('Testing Render', () => {
        render(
            <MUIThemeProvider theme={customTheme}>
                <DetailCard
                    jobTitle="MockTitle"
                    companyCity="MockCity"
                    companyName="MockCompany"
                    time="44 min ago"
                />
            </MUIThemeProvider>
        )

        const title = screen.getByText(/MockTitle/i)
        expect(title).toBeInTheDocument()
    })
})
