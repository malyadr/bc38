import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import SideNav from './index'
import theme from '../../../theme/customTheme'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import store from '../../../store/store'

describe('Side nav organism component', () => {
    it('should render ', () => {
        const wrapper = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <SideNav />
                </ThemeProvider>
            </Provider>
        )
        expect(wrapper).toBeTruthy
    })


})
