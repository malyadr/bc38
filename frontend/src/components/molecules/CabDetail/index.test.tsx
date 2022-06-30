import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import CabDetail from '.'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../../theme/customTheme'

test('test for cab name  ', () => {
    render(
        <ThemeProvider theme={theme}>
            <CabDetail cab="Ola" detail="1200" src="ola" />
        </ThemeProvider>
    )
    const containedButton = screen.getByText(/ola/i)
    expect(containedButton).toBeInTheDocument()
})
