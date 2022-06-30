import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import  AqiIndicator  from '.'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../../theme/customTheme'




test('test for index and render  ', () => {
    render(
        <ThemeProvider theme={theme}>
            <AqiIndicator index="100" size="small"/>
        </ThemeProvider>
    )
    const containedButton = screen.getByText(/100/i)
    expect(containedButton).toBeInTheDocument()
})

test('test for index with large size', () => {
    render (
        <ThemeProvider theme={theme}>
            <AqiIndicator index="100" size="large" />
        </ThemeProvider>
    )
    const containedButton = screen.getByText(/100/i)
    expect(containedButton).toBeInTheDocument()
})