import React from 'react'
import { ComponentStory } from '@storybook/react'
import { AQI } from '.'

export default {
    title: 'Organisms/AQI',
    component: AQI,
}

const Template: ComponentStory<typeof AQI> = (args) => {
    return <AQI {...args} />
}

export const AQIViewer = Template.bind({})

AQIViewer.args = {
    details: ['Hyderabad', 'Delhi'],
    step: 1,
}

