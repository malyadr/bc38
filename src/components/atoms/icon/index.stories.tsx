import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Icon from '.'
export default {
    title: 'Atoms/Icon',
    component: Icon,
   argTypes: {
        src: {
            control: { type: 'select', options: ["save", "dashboard", "work", "test", "settings", "news", "help", "contact", "done", "notifications", "search", "message", "bus", "car", "train", "bike", "more", "filter", "back", "location1", "location", "tick", "current", "swap", "rupee", "close", "upload", "jobs", "circle", "hoveredBus", "hoveredCar", "line", "selectedBus", "selectedCar", "from", "to"]}, 
            
        },
    },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const icon = Template.bind({})

icon.args = {
    src: 'save',
    sx: {overflow:'visible'}
}
