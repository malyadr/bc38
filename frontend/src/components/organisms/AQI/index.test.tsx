import { render } from '@testing-library/react'
import React from 'react'
import { AQI } from '.'
const defaultValue = {
    currentLocation: 'hyderabad',
    jobLocation: ['hyderabad', 'mumbai'],
    mySkills: ['hyderabad', 'mumbai'],
}
const emptyValue = {
    currentLocation: '',
    jobLocation: [],
    mySkills: [],
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

it('render when details are empty adn step is 0', () => {
    render(<AQI details={emptyValue} step={0}></AQI>)
})

it('render when details are empty adn step is 1', () => {
    render(<AQI details={emptyValue} step={1}></AQI>)
})
it('render when details are empty adn step is 2', () => {
    render(<AQI details={emptyValue} step={2}></AQI>)
})
