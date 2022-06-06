import Img from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import React from 'react'

export default {
    title: 'atoms/image',
    component: Img,
    argTypes: {
        src: {
            control: {type:'select', options:["bmw", "hp", "instagram", "myntra", "ola", "rapido", "twitter", "uber", "wipro", "avatar", "work", "jobs", "hitech", "logo1", "logo2", "stay", "aqi", "mapView"]},
        }
    }

} as ComponentMeta<typeof Img>

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />

export const Image = Template.bind({})

Image.args = {
    src: 'ola',
}

