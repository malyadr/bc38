import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { SetStateAction } from 'react'
import JobSearch from './index'
export default {
    title: 'Organisms/SearchBar',
    component: JobSearch,
} as ComponentMeta<typeof JobSearch>

const Template: ComponentStory<typeof JobSearch> = () => (
    <JobSearch
        SetSkill={() => undefined}
        SetLocation={() => undefined}
        setStatus={() => undefined}
    />
)

export const searchBar = Template.bind({})
