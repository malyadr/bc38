import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Icon from '.'
export default {
    title: 'Atoms/Icon',
    component: Icon,
    argTypes: {
        src: {
            control: 'text',
            description: 'The source of the icon',
            defaultValue: '/assets/icons/save.svg',
        },
    },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})

Default.args = {
    src: '/assets/icons/save.svg',
}
