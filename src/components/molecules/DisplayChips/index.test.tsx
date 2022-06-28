import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import DisplayChips from '.'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import customTheme from '../../../theme/customTheme'

const mockFun = jest.fn()
test('render', () => {
    render(
        <MUIThemeProvider theme={customTheme}>
            <DisplayChips
                data={['hi']}
                setData={mockFun}
                setDistance={mockFun}
                distance={['hi']}
                setClearAll={mockFun}
            />
        </MUIThemeProvider>
    )
    const text = screen.getByText(/hi/i)

    const button = screen.getByText(/Clear All/i)
    fireEvent.click(button)
})
test('test for checkbox values', () => {
    render(
        <MUIThemeProvider theme={customTheme}>
            <DisplayChips
                data={['first']}
                setData={mockFun}
                setDistance={mockFun}
                distance={['hi']}
                setClearAll={mockFun}
            />
        </MUIThemeProvider>
    )
    const button = screen.getByTestId(/close/i)
    fireEvent.click(button)
})
