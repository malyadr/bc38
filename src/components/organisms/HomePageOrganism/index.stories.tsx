import React from 'react'
import { ComponentStory } from '@storybook/react'
import { HomePageOrganism } from '.'
export default {
    title: 'organisms / HomePageOrganism',
    component: HomePageOrganism,
}
const Template: ComponentStory<typeof HomePageOrganism> = (args) => (
    <HomePageOrganism />
)

export const homePageOrganism = Template.bind({})
homePageOrganism.args = {
    // setAdditional: { undefined },
}
