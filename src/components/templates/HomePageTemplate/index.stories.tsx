import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomePageTemplate from '.'
import { Provider } from 'react-redux'
import store from '../../../store/store'

export default {
    title: 'Template/HomePage',
    component: HomePageTemplate,
} as ComponentMeta<typeof HomePageTemplate>

const Template: ComponentStory<typeof HomePageTemplate> = (args) => (
    <Provider store={store}>
        <HomePageTemplate details={''} />
    </Provider>
)

export const homePageTemplate = Template.bind({})
