import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import SideNav from '.'

export default {
    title: 'Organisms/SideNav',
    component: SideNav,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/aAZmibHibDJ541oKCpxVso/Green-Commute?node-id=78%3A28901',
        },
    },
} as ComponentMeta<typeof SideNav>

const Template: ComponentStory<typeof SideNav> = (args) => <SideNav />

export const sidenav = Template.bind({})
