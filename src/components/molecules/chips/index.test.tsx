import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { Chips } from '.'

test('test to check whether chip Component is present ', () => {
    render(
        <Chips
            text="graphic designer"
            variant={undefined}
            styles={{
                width: '99px',
                height: '32px',
                backgroundColor: 'gammaWhite.main',
            }}
        />
    )
    const chipText = screen.getByText(/graphic designer/i)
    expect(chipText).toBeInTheDocument()
})
