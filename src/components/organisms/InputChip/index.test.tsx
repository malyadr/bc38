import { ThemeProvider } from '@mui/material/styles'
import { screen } from '@storybook/testing-library'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { InputChip } from '.'
import theme from '../../../theme/customTheme'

const mockFunction = jest.fn()

test('render', () => {
    render(
        <ThemeProvider theme={theme}>
            <InputChip
                placeholder={'hi'}
                options={[]}
                updateData={mockFunction}
                uniqueKey={1}
                backTextValue={[]}
            ></InputChip>
        </ThemeProvider>
    )
    const text = screen.getByPlaceholderText('hi')
    // expect(text).toBeInTheDocument()
    fireEvent.change(text)
})
