import React from 'react'
import { ComponentStory } from '@storybook/react'
import SavedJobCard from '.'
export default {
    title: 'molecules / SavedJobCard',
    component: SavedJobCard,
}
const Template: ComponentStory<typeof SavedJobCard> = (args) => (
    <SavedJobCard {...args} />
)

export const savedJobCard = Template.bind({})
savedJobCard.args = {
    id: 1,
    src: 'hp',
    role: 'User Experience Designer',
    companyName: 'HP',
    location: 'Hyderabad, Telangana, India',
    time: '1hr 36 mins ago',
}
