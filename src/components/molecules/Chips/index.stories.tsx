import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Chips } from '.'
export default {
    title: 'molecules / Chips',
    component: Text,
}
const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />

export const Chip = Template.bind({})
Chip.args = {
    text: 'Hyderabad',
    variant: 'caption2',
    styles: {
        width: '146px',
        height: '32px',
        backgroundColor: 'gammaColor1.main',
        borderRadius: '8px',
    },
    onDelete: () => {
        //remove the chip
    },
}
