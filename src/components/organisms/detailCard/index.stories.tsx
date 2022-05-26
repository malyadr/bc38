import React from 'react'
import DetailCard from '.'
import { ComponentStory } from '@storybook/react'

export default {
    title: 'Organism/JobDetailCard',
    component: DetailCard,
}

const Template: ComponentStory<typeof DetailCard> = (args) => (
    <DetailCard {...args} />
)

export const DetailJobCard = Template.bind({})

DetailJobCard.args = {
    jobTitle: 'Software Engineer',
    companyCity: 'Hitech City Hyderabad-50072',
    companyName: 'Zemoso',
    time: '36 min ago',
}
