import React from 'react'
import { ProgressStepper } from './components/organisms/progressStepper'

type additional = {
    currentLocation: string[]
    jobLocation: string[]
    skills: string[]
}

function App() {
    const [additional, setAdditional] = React.useState<additional>()

    return (
        <>
            <ProgressStepper
                additional={additional}
                setAdditional={setAdditional}
            />
        </>
    )
}

export default App
