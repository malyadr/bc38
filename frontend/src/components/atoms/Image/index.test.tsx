import { render, screen } from '@testing-library/react'
import Img from '.'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import React from 'react'

test('renders learn react link', () => {
    render(
        <BrowserRouter>
            <Img src="ola"></Img>
        </BrowserRouter>
    )
    const linkElement = screen.getByTestId('img')
    expect(linkElement).toBeInTheDocument()
})
