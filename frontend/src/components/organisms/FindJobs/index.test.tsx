import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { render} from '@testing-library/react'
import { FindJobs } from '.'
import theme from '../../../theme/customTheme'
import { Provider } from 'react-redux'
import store from '../../../store/store'


const mockFn = jest.fn()
const mockStatus = jest.fn(x => x + 4);
test('render', () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <FindJobs />
            </ThemeProvider>
        </Provider>
    )
   
})
