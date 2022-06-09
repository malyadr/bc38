import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import Popup from '.'
import React from 'react'
import customTheme from '../../../theme/customTheme'
import '@testing-library/jest-dom'
import FileUploader from '../fileUploader'
const name = jest.fn()
describe('Pop Test', () => {
    test('Popup Render', () => {
        render(
            <MUIThemeProvider theme={customTheme}>
                <Popup />
            </MUIThemeProvider>
        )

        const popButton = screen.getByRole('button')
        expect(popButton).toBeInTheDocument()
    })
    test('Popup Button Fire', () => {
        render(
            <MUIThemeProvider theme={customTheme}>
                <Popup />
            </MUIThemeProvider>
        )

        const popButton = screen.getByRole('button')
        fireEvent.click(popButton)
        expect(
            screen.getByText(/Click Here to Upload Files/i)
        ).toBeInTheDocument()
    })
})
