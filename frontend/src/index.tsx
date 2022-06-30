import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/customTheme'
import { CssBaseline } from '@mui/material'
import store from './store/store'
import { Provider } from 'react-redux'
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,

    document.getElementById('root')
)
