import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import LandingPageTemplate from '.'
import { AQI } from '../../organisms/AQI'

export default {
    title: 'Template/Landing Page',
    component: LandingPageTemplate,
} as ComponentMeta<typeof LandingPageTemplate>

const Template: ComponentStory<typeof LandingPageTemplate> = (args) => (
    <LandingPageTemplate {...args} />
)

export const landingPageTemplate = Template.bind({})

landingPageTemplate.args = {
    left: <AQI details={['Hyderabad']} step={1} />,
}
