import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Button1 } from '.'
export default {
    title: 'molecules / Button',
    component: Button1,
}
const Template: ComponentStory<typeof Button1> = (args) => <Button1 {...args} />

export const Buttons = Template.bind({})
Buttons.args = {
    variant: 'caption1',
    buttonVariant: 'contained',
    buttonColor: 'alpha400',
    children: 'Save',
    styles: { width: '140px', height: '40px' },
}
