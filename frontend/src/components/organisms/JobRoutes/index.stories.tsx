import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Routes } from '.'
export default {
    title: 'organisms / Routes',
    component: Routes,
}
const Template: ComponentStory<typeof Routes> = () => (
    <Routes values={[true, true, true, true]} />
)

export const jobRoutes = Template.bind({})
