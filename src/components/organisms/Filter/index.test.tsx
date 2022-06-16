import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Filter from '.'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import customTheme from '../../../theme/customTheme'
const mockFun = jest.fn()
test('test for checkbox values', () => {
    render(
        <MUIThemeProvider theme={customTheme}>
            <Filter setData={mockFun} setDistance={mockFun} />
        </MUIThemeProvider>
    )
    const button = screen.getByText(/Filter/i)
    fireEvent.click(button)
})
test('render', () => {
    render(
        <MUIThemeProvider theme={customTheme}>
            <Filter setData={mockFun} setDistance={mockFun} />
        </MUIThemeProvider>
    )
    const button = screen.getByText(/Filter/i)
    fireEvent.click(button)
    const clearAll = screen.getByText(/Clear All/i)
    fireEvent.click(clearAll)
    const button1 = screen.getByText(/Filter/i)
    fireEvent.click(button1)
    const apply = screen.getByText(/Apply/i)
    fireEvent.click(apply)
})
