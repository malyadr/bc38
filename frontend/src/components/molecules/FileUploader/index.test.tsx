import { fireEvent, render, screen } from '@testing-library/react'
import React, { SetStateAction } from 'react'
import FileUploadPopup from '.'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../../theme/customTheme'
const name = jest.fn()
test('test to check where close icons fires an event when clicked', () => {
    render(
        <ThemeProvider theme={theme}>
            <FileUploadPopup setOpen={name} setApplied={name} />
        </ThemeProvider>
    )
    const closeIcon = screen.getByTestId('close')
    fireEvent.click(closeIcon)
})

test('test to check where upload files button fires an event when clicked', () => {
    render(
        <ThemeProvider theme={theme}>
            <FileUploadPopup setOpen={name} open={true} setApplied={name} />
        </ThemeProvider>
    )

    const text = screen.getByText(/Click Here to Upload Files/i)
    fireEvent.click(text)
})

test('test to check whether close1 icon and okay button are in the document after the input value is changed', () => {
    render(
        <ThemeProvider theme={theme}>
            <FileUploadPopup setOpen={name} open={true} setApplied={name} />
        </ThemeProvider>
    )

    const input = screen.getByTestId(/input/i)
    fireEvent.change(input)
    const Okaytext = screen.getByText(/Okay/i)
    fireEvent.click(Okaytext)

    const closeIcon = screen.getByTestId('close1')
    fireEvent.click(closeIcon)
})
