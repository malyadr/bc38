import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { JobCard } from '.'

test('test to check whether chip Component is present ', () => {
    render(
        <JobCard
            id={1}
            src={'ola'}
            role={''}
            companyName={''}
            location={''}
            time={''}
        />
    )
})
