import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ProgressStepper } from '.'

type additional = {
    currentLocation: string[]
    jobLocation: string[]
    skills: string[]
}

export default {
    title: 'Organism / LandingPage',
    component: ProgressStepper,
}

const Template: ComponentStory<typeof ProgressStepper> = (args) => {
    const [additional, setAdditional] = React.useState<additional>()

    return (
        <ProgressStepper
            {...args}
            additional={additional}
            setAdditional={setAdditional}
        />
    )
}

export const LandingPage = Template.bind({})
