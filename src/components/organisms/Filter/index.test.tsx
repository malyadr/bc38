import { render } from '@testing-library/react'
import React from 'react'
import Filter from '.'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import customTheme from '../../../theme/customTheme'
const mockFun = jest.fn()
test('render', () => {
    render(
        <MUIThemeProvider theme={customTheme}>
            <Filter setData={mockFun} setDistance={mockFun} />
        </MUIThemeProvider>
    )
})
