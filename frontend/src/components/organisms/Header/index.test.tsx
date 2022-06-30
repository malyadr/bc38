import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import TopNavbar from './index'

it('renders navbar', () => {
    render(<TopNavbar text={'Hyderabad'} />)
    const testIcon = screen.getByTestId('topnavbar')
    expect(testIcon).toBeInTheDocument()
})

it('renders navbar', () => {
    render(<TopNavbar text={'Hyderabad'} height={'80px'} />)
    const testIcon = screen.getByTestId('topnavbar')
    expect(testIcon).toBeInTheDocument()
})
