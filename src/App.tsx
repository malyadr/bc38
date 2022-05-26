import React from 'react'
import ControlledCheckbox from './components/molecules/checkBox'
import FileUploader from './components/molecules/fileUploader'
import Popup from './components/molecules/popup'
import RadioButtons from './components/molecules/radioButtons'
import ProgressStepper from './components/molecules/stepper'
import DetailCard from './components/organisms/detailCard'
import Filter from './components/organisms/filter'

function App() {
    return (
        <>
            <DetailCard
                jobTitle="User Experince Designer"
                companyName="Myntra"
                companyCity="Hitech City Hyderabad-50072"
                time="36 min ago"
            />
            <ProgressStepper />
            <Popup>
                <FileUploader />
            </Popup>
            <Filter />
            <ControlledCheckbox defaultChecked={true} />
            <RadioButtons value="no" />
        </>
    )
}

export default App
