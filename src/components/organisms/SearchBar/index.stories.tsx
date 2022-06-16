import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { SetStateAction } from 'react'
import JobSearch from './index'
export default {
    title: 'Organisms/SearchBar',
    component: JobSearch,
} as ComponentMeta<typeof JobSearch>

const Template: ComponentStory<typeof JobSearch> = () => (
    <JobSearch
        SetSkill={function (value: SetStateAction<string>): void {
            throw new Error('Function not implemented.')
        }}
        SetLocation={function (value: SetStateAction<string>): void {
            throw new Error('Function not implemented.')
        }}
        setStatus={function (value: SetStateAction<number>): void {
            throw new Error('Function not implemented.')
        }}
    />
)

export const searchBar = Template.bind({})
