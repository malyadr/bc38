import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import  LocationBar  from '.'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../../theme/customTheme'




test('test for location name  ', () => {
    render(
        <ThemeProvider theme={theme}>
            <LocationBar location="hyderabad" />
        </ThemeProvider>
    )
    const containedButton = screen.getByText(/hyderabad/i)
    expect(containedButton).toBeInTheDocument()
})