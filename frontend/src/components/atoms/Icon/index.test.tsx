import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Icon from './index'
import React from 'react'

it('renders mui icons', () => {
    render(<Icon src={'save'} data-testid="icon" />)
    const testIcon = screen.getByTestId('icon')
    expect(testIcon).toBeInTheDocument();
})
