import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import SavedJobCard from '.'

test('test to check whether chip Component is present ', () => {
    render(
        <SavedJobCard
            src={'hp'}
            role={''}
            companyName={''}
            location={''}
            time={''}
            isHovered={false}
        />
    )
})
