import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomePageTemplate from '.'

export default {
    title: 'Template/HomePage',
    component: HomePageTemplate,
} as ComponentMeta<typeof HomePageTemplate>

const Template: ComponentStory<typeof HomePageTemplate> = (args) => (
    <HomePageTemplate details={''} />
)

export const homePageTemplate = Template.bind({})
