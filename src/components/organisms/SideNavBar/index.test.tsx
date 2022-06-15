import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import SideNav from './index'
import theme from '../../../theme/customTheme'
import { ThemeProvider } from '@mui/material/styles'

describe('Side nav organism component', () => {
    it('should render ', () => {
        const wrapper = render(
            // <MemoryRouter>
            <ThemeProvider theme={theme}>
                <SideNav />
            </ThemeProvider>
            // </MemoryRouter>
        )
        expect(wrapper).toBeTruthy
    })

    it('check all the side nav headings is present', () => {
        const wrapper = render(
            // <MemoryRouter>
            <ThemeProvider theme={theme}>
                <SideNav />
            </ThemeProvider>
            // </MemoryRouter>
        )
    })
})
