import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import React from 'react'
import customTheme from '../../../theme/customTheme'
import '@testing-library/jest-dom'
import ProgressStepper from '.'
import { fireEvent } from '@storybook/testing-library'

describe('Progress Bar Testing', () => {
    test('Testing Render', () => {
        render(
            <MUIThemeProvider theme={customTheme}>
                <ProgressStepper step={1} />
            </MUIThemeProvider>
        )

        const title = screen.getByText(/Your Location/i)
        expect(title).toBeInTheDocument()
    })
    test('Testing Button', () => {
        render(
            <MUIThemeProvider theme={customTheme}>
                <ProgressStepper step={1} />
            </MUIThemeProvider>
        )

        const backBtn = screen.getByRole('button', {
            name: /Back/i,
        })

        expect(backBtn).toBeInTheDocument()
    })
    test('Testing Next Button', () => {
        render(
            <MUIThemeProvider theme={customTheme}>
                <ProgressStepper step={2} />
            </MUIThemeProvider>
        )

        const nextBtn = screen.getByRole('button', {
            name: /Next/i,
        })

        fireEvent.click(nextBtn)
        fireEvent.click(nextBtn)
        fireEvent.click(nextBtn)

        expect(nextBtn).toBeInTheDocument()
    })

    test('Testing Back Button', () => {
        render(
            <MUIThemeProvider theme={customTheme}>
                <ProgressStepper step={2} />
            </MUIThemeProvider>
        )
        const backBtn = screen.getByRole('button', {
            name: /Back/i,
        })
        fireEvent.click(backBtn)
        expect(backBtn).toBeInTheDocument()
    })
})
