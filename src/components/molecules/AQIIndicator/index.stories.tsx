import React from 'react'
import { ComponentStory } from '@storybook/react'
import AqiIndicator from '.'
export default {
    title: 'molecules / AQI Indicator',
    component: AqiIndicator,
}
const Template: ComponentStory<typeof AqiIndicator> = (args) => (
    <AqiIndicator {...args} />
)

export const aqi = Template.bind({})

aqi.args = {
    index: '1200',
    size:"small"
}
