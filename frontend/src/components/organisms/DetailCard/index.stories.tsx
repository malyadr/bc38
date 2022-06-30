import React from 'react'
import DetailCard from '.'
import { ComponentStory } from '@storybook/react'
import { Provider } from 'react-redux'
import store from '../../../store/store'

export default {
    title: 'Organisms/JobDetailCard',
    component: DetailCard,
    argTypes: {
        src: {
            control: {
                type: 'select',
                options: [
                    'bmw',
                    'hp',
                    'instagram',
                    'myntra',
                    'ola',
                    'rapido',
                    'twitter',
                    'uber',
                    'wipro',
                    'avatar',
                    'work',
                    'jobs',
                    'hitech',
                    'logo1',
                    'logo2',
                    'stay',
                ],
            },
        },
    },
}

const Template: ComponentStory<typeof DetailCard> = (args) => (
    <Provider store={store}>
        <DetailCard {...args} />
    </Provider>
)

export const DetailJobCard = Template.bind({})

DetailJobCard.args = {
    id: 4,
}
