import React from 'react'
import { ComponentStory } from '@storybook/react'
import AQIIndicator from '.'
export default {
    title: 'molecules / AQI Indicator',
    component: AQIIndicator,
}
const Template: ComponentStory<typeof AQIIndicator> = (args) => (
    <AQIIndicator {...args} />
)

export const aqi = Template.bind({})

aqi.args = {
    index: '1200',
}
