import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Chips } from '.'
export default {
    title: 'molecules / chips',
    component: Text,
}
const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />

export const chips = Template.bind({})
chips.args = {
    text: 'Hyderabad',
    variant: 'caption2',
    styles: {
        width: '140px',
        height: '16px',
        backgroundColor: 'gammaColor1.main',
        borderRadius: '8px',
    },
    onDelete: () => {
        //remove the chip
    },
}
