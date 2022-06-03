import React from 'react'
import { ComponentStory } from '@storybook/react'
import CabDetail from '.'

export default {
    title: 'molecules / Cab Detail',
    component: CabDetail,
}
const Template: ComponentStory<typeof CabDetail> = (args) => (
    <CabDetail {...args} />
)

export const button = Template.bind({})

button.args = {
    cab: 'Ola',
    detail: '1200',
    src: '/assets/icons/ola.svg',
}
