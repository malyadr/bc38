import { ThemeProvider } from '@mui/material'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import theme from '../../../theme/customTheme'
import SearchBar from './index'

it('renders Job Search Bar', () => {
    render(
        <ThemeProvider theme={theme}>
            <SearchBar />
        </ThemeProvider>
    )
})
