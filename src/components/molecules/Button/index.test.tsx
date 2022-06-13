import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { Button1 } from '.'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../../theme/customTheme'

test('test to check whether button Component is present ', () => {
    render(
        <ThemeProvider theme={theme}>
            <Button1
                variant="caption1"
                TextColor="gammaWhite.main"
                buttonVariant="contained"
                buttonColor="alpha400"
                styles={{ width: '140px', height: '16px' }}
                onClick={undefined}
            >
                next
            </Button1>
        </ThemeProvider>
    )
    const loginButton = screen.getByText(/next/i)
    expect(loginButton).toBeInTheDocument()
})

test('test for contained buttons  ', () => {
    render(
        <ThemeProvider theme={theme}>
            <Button1
                variant="caption1"
                TextColor="gammaColor1.main"
                buttonVariant="contained"
                buttonColor="alpha400"
                styles={{ width: '140px', height: '16px' }}
                onClick={undefined}
            >
                next
            </Button1>
        </ThemeProvider>
    )
    const containedButton = screen.getByText(/next/i)
    expect(containedButton).toBeInTheDocument()
})
