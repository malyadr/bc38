import React, { SetStateAction } from 'react'
import { ComponentStory } from '@storybook/react'
import { HomePageOrganism } from '.'
export default {
    title: 'organisms / HomePageOrganism',
    component: HomePageOrganism,
}
const Template: ComponentStory<typeof HomePageOrganism> = (args) => (
    <HomePageOrganism {...args} />
)

export const homePageOrganism = Template.bind({})
homePageOrganism.args = {
    activeStep: 0,
    setActiveStep: () => undefined,
    setDetails: () => undefined,
}
