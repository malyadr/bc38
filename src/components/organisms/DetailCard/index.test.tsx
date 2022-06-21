import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import DetailCard from '.'
import React from 'react'
import customTheme from '../../../theme/customTheme'
import '@testing-library/jest-dom'
import { fireEvent } from '@storybook/testing-library'

const mockFun = jest.fn()

describe('Detail Job Card Test', () => {
    test('Testing Render', () => {
        render(
            <MUIThemeProvider theme={customTheme}>
                <DetailCard
                    src="ola"
                    jobTitle="MockTitle"
                    companyCity="MockCity"
                    companyName="MockCompany"
                    time="44 min ago"
                    id={1}
                    saved={true}
                    setState={mockFun}
                    applied={false}
                />
            </MUIThemeProvider>
        )

        const title = screen.getByText(/MockTitle/i)
        expect(title).toBeInTheDocument()
    })
})
test('Testing save button', () => {
    render(
        <MUIThemeProvider theme={customTheme}>
            <DetailCard
                src="ola"
                jobTitle="MockTitle"
                companyCity="MockCity"
                companyName="MockCompany"
                time="44 min ago"
                id={1}
                saved={true}
                setState={mockFun}
                applied={false}
            />
        </MUIThemeProvider>
    )

    const saveButton = screen.getByText(/Save/i)
    expect(saveButton).toBeInTheDocument()
    fireEvent.click(saveButton)
})

test('Testing Green Commute Routes button', () => {
    render(
        <MUIThemeProvider theme={customTheme}>
            <DetailCard
                src="ola"
                jobTitle="MockTitle"
                companyCity="MockCity"
                companyName="MockCompany"
                time="44 min ago"
                id={1}
                saved={true}
                setState={mockFun}
                applied={false}
            />
        </MUIThemeProvider>
    )

    const title = screen.getByText(/Green Commute Routes/i)
    expect(title).toBeInTheDocument()
    fireEvent.click(title)
})
