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
    details: {
        currentLocation: {
            name: 'hyderabad',
            aqi: 894,
        },
        jobLocation: [
            {
                name: 'hyderabad',
                aqi: 894,
            },
        ],
        mySkills: {
            skills: ['ux'],
            numberOfJobs: 5,
        },
    },
    step: 1,
}
