import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import SavedJobCard from '.'

test('test to render savedjob  ', () => {
    render(
        <SavedJobCard
            id={1}
            src={'hp'}
            role={''}
            companyName={''}
            location={''}
            time={''}
            isBordered={true}
        />
    )
})
test('test to render savedjob with diff data ', () => {
    render(
        <SavedJobCard
            id={6}
            src={'hp'}
            role={''}
            companyName={''}
            location={''}
            time={''}
            isBordered={false}
        />
    )
})
