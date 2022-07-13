import { render } from '@testing-library/react'
import React from 'react'
import { AQI } from '.'
const defaultValue = {
    currentLocation: {
        name: 'hyderabad',
        aqi: 894,
    },
    jobLocation: [
        {
            name: 'hyderabad',
            aqi: 894,
        },
    ],
    mySkills: {
        skills: ['ux'],
        numberOfJobs: 5,
    },
}

it('render step 2', () => {
    render(<AQI step={2} details={defaultValue}></AQI>)
})
it('render step 0', () => {
    render(<AQI details={defaultValue} step={0}></AQI>)
})
it('render step 1', () => {
    render(<AQI details={defaultValue} step={1}></AQI>)
})
