import { render } from '@testing-library/react'
import React from 'react'
import ControlledCheckbox from '.'

it('render', () => {
    render(<ControlledCheckbox defaultChecked={false} />)
})
