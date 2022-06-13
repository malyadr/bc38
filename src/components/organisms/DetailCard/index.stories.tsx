import React from 'react'
import DetailCard from '.'
import { ComponentStory } from '@storybook/react'

export default {
    title: 'Organisms/JobDetailCard',
    component: DetailCard,
    argTypes: {
        src: {
            control: {type:'select', options:["bmw", "hp", "instagram", "myntra", "ola", "rapido", "twitter", "uber", "wipro", "avatar", "work", "jobs", "hitech", "logo1", "logo2", "stay"]},
        }
    }
}

const Template: ComponentStory<typeof DetailCard> = (args) => (
    <DetailCard {...args} />
)

export const DetailJobCard = Template.bind({})

DetailJobCard.args = {
    src: 'hp',
    jobTitle: 'Software Engineer',
    companyCity: 'Hitech City Hyderabad-50072',
    companyName: 'Zemoso',
    time: '36 min ago',
}
