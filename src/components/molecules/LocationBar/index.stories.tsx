import React from 'react'
import { ComponentStory } from '@storybook/react'
import LocationBar from '.'
export default {
    title: 'molecules / Location Bar',
    component: LocationBar,
}
const Template: ComponentStory<typeof LocationBar> = (args) => (
    <LocationBar {...args} />
)

export const Location = Template.bind({})
Location.args = {
    location: 'East Marredpally, Secunderabad',
}
