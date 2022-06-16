import { render } from '@testing-library/react'
import React from 'react'
import { AQI } from '.'

const dummy = {
    currentLocation: '',
    jobLocation: [],
    mySkills: [],
}

it('render', () => {
    render(<AQI details={dummy} step={2}></AQI>)
})
