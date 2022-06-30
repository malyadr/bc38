import React, { SetStateAction } from 'react'
import { ComponentStory } from '@storybook/react'
import { HomePageOrganism } from '.'
import { BrowserRouter } from 'react-router-dom'
export default {
    title: 'organisms / HomePageOrganism',
    component: HomePageOrganism,
}
const Template: ComponentStory<typeof HomePageOrganism> = (args) => (
    <BrowserRouter>
        <HomePageOrganism {...args} />
    </BrowserRouter>
)

export const homePageOrganism = Template.bind({})
homePageOrganism.args = {
    activeStep: 0,
    setActiveStep: () => undefined,
    setDetails: () => undefined,
}
