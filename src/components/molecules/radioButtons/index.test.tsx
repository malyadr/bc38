import { fireEvent } from '@storybook/testing-library'
import { render, screen } from '@testing-library/react'
import React from 'react'
import RadioButtons from '.'

it('render', () => {
    render(<RadioButtons value={false}></RadioButtons>)
    const radio = screen.getByTestId(/RadioButtonUncheckedIcon/i)
    fireEvent.click(radio)
})
