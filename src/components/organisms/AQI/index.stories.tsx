import React from 'react'
import { ComponentStory } from '@storybook/react'
import { AQI } from '.'
import theme from '../../../theme/customTheme'

export default {
    title: 'Organism/AQI',
    component: AQI,
}

const Template: ComponentStory<typeof AQI> = (args) => {
    return <AQI {...args} />
}

export const AQIViewer = Template.bind({})

AQIViewer.args = {
    details: ['Hyderabad', 'Delhi'],
    steps: 0,
}

AQIViewer.decorators = [
    (Story) => (
        <div style={{ backgroundColor: theme.palette.gammaColor1.main }}>
            <Story />
        </div>
    ),
]
