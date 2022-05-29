import React from 'react'
import { ComponentStory } from '@storybook/react'
import LocationBar from '.'
export default {
    title: 'molecules / Location Bar',
    component: LocationBar,
}
const Template: ComponentStory<typeof LocationBar> = () => <LocationBar />

export const button = Template.bind({})
