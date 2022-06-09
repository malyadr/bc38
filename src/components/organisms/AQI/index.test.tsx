import { render } from '@testing-library/react'
import React from 'react'
import { AQI } from '.'

it('render', () => {
    render(<AQI details={[]} step={2}></AQI>)
})
