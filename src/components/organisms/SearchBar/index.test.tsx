import { ThemeProvider } from '@mui/material'
import { fireEvent } from '@storybook/testing-library'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import theme from '../../../theme/customTheme'
import SearchBar from './index'
const mockFn = jest.fn()
it('renders Job Search Bar', () => {
    render(
        <ThemeProvider theme={theme}>
            <SearchBar
                SetSkill={mockFn}
                SetLocation={mockFn}
            />
        </ThemeProvider>
    )
    const button = screen.getByTestId(/iconButton/i)
    fireEvent.click(button)
})
it('renders search skills input', () => {
    render(
        <ThemeProvider theme={theme}>
            <SearchBar
                SetSkill={mockFn}
                SetLocation={mockFn}
            />
        </ThemeProvider>
    )
    const button = screen.getByPlaceholderText(/Search Skills/i)
    fireEvent.change(button)
})
it('renders Location input', () => {
    render(
        <ThemeProvider theme={theme}>
            <SearchBar
                SetSkill={mockFn}
                SetLocation={mockFn}
            />
        </ThemeProvider>
    )
    const button = screen.getByPlaceholderText(/Location/i)
    fireEvent.change(button)
})
