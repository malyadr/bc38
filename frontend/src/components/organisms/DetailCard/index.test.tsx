import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import DetailCard from '.'
import React from 'react'
import customTheme from '../../../theme/customTheme'
import '@testing-library/jest-dom'
import { fireEvent } from '@storybook/testing-library'
import { Provider } from 'react-redux'
import store from '../../../store/store'

const mockFun = jest.fn()

describe('Detail Job Card Test', () => {
    test('Testing Render', () => {
        render(
            <Provider store={store}>
                <MUIThemeProvider theme={customTheme}>
                    <DetailCard id={4} />
                </MUIThemeProvider>
            </Provider>
        )

        const title = screen.getByText('Apply')
        expect(title).toBeInTheDocument()
    })
})
test('Testing save button', () => {
    render(
        <Provider store={store}>
            <MUIThemeProvider theme={customTheme}>
                <DetailCard id={3} />
            </MUIThemeProvider>
        </Provider>
    )

    const saveButton = screen.getByText(/Save/i)
    expect(saveButton).toBeInTheDocument()
    fireEvent.click(saveButton)
})

test('Testing Green Commute Routes button', () => {
    render(
        <Provider store={store}>
            <MUIThemeProvider theme={customTheme}>
                <DetailCard id={1} />
            </MUIThemeProvider>
        </Provider>
    )

    const title = screen.getByText(/Green Commute Routes/i)
    expect(title).toBeInTheDocument()
    fireEvent.click(title)
})
