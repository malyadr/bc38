import Img from '.'
import { ComponentStory } from '@storybook/react'

import React from 'react'

export default {
    title: 'atoms/image',
    component: Img,
}

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />

export const Image1 = Template.bind({})
export const Image2 = Template.bind({})
export const Image3 = Template.bind({})
export const Image4 = Template.bind({})
export const Image5 = Template.bind({})
export const Image6 = Template.bind({})
export const Image7 = Template.bind({})
export const Image8 = Template.bind({})
export const Image9 = Template.bind({})
export const Image10 = Template.bind({})
Image1.args = {
    src: '/assets/images/Group 105.jpg',
}
Image2.args = {
    src: '/assets/images/Group 10.jpg',
}
Image3.args = {
    src: '/assets/images/Group 72.jpg',
}
Image4.args = {
    src: '/assets/images/image 7.jpg',
}
Image5.args = {
    src: '/assets/images/image 8.jpg',
}
Image6.args = {
    src: '/assets/images/image 11.jpg',
}
Image7.args = {
    src: '/assets/images/image 13.jpg',
}
Image8.args = {
    src: '/assets/images/image 15.jpg',
}
Image9.args = {
    src: '/assets/images/image 16.jpg',
}
Image10.args = {
    src: '/assets/images/AirQualityIndex.svg',
}
