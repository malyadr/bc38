import React from 'react'
import { ComponentStory } from '@storybook/react'
import { InputField } from '.'
export default {
    title: 'molecules / InputField',
    component: InputField,
}
const Template: ComponentStory<typeof InputField> = (args) => (
    <InputField {...args} />
)

export const Inputfield = Template.bind({})
Inputfield.args = {
    text: 'Enter your location',
    variant: 'outlined',
    styles: { width: '400px', height: '48px' },
}
