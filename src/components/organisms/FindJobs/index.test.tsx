import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { FindJobs } from '.'
import theme from '../../../theme/customTheme'


const mockFn = jest.fn()
const mockStatus = jest.fn(x => x + 4);
test('render', () => {
    render(
        <ThemeProvider theme={theme}>
            <FindJobs
                data={[
                    {
                        id: 1,
                        image: 'hp',
                        company: 'HP',
                        role: 'User Experience Designer',
                        jobLocation: 'Hyderabad, Telangana, India',
                        time: '1hr 36 mins ago',
                        saved: false,
                        applied: false,
                        distance: '31-40 Kms',
                    },
                ]}
                setState={mockFn} setStatus={mockStatus} clickStatus={0}
           />
        </ThemeProvider>
    )
    const card = screen.getByTestId(/card1/i)
    fireEvent.click(card)
})
