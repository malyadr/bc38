import React, { SetStateAction } from 'react'
import { ComponentStory } from '@storybook/react'
import Popup from '.'
import FileUploader from '../FileUploader'

export default {
    title: 'Molecules/Popup',
    component: Popup,
}

const Template: ComponentStory<typeof Popup> = (args) => <Popup setApplied={function (value: SetStateAction<boolean>): void {
    throw new Error('Function not implemented.')
} } applied={false} />

export const ApplyPopup = Template.bind({})

ApplyPopup.args = {}
