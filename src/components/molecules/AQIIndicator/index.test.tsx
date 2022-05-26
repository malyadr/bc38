import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import  AqiIndicator  from '.'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../../theme/customTheme'




test('test for cab name  ', () => {
    render(
        <ThemeProvider theme={theme}>
            <AqiIndicator index="100" />
        </ThemeProvider>
    )
    const containedButton = screen.getByText(/100/i)
    expect(containedButton).toBeInTheDocument()
})