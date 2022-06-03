import React from 'react'
import SearchBar from './components/organisms/filterOptions'
// import SavedJobCard from './components/organisms/SavedJobCard'
// import CabDetail from './components/molecules/CabDetail'
// import ControlledCheckbox from './components/molecules/checkBox'
// import FileUploader from './components/molecules/fileUploader'
// import LocationBar from './components/molecules/LocationBar'
// import Popup from './components/molecules/popup'
// import RadioButtons from './components/molecules/radioButtons'
// import ProgressStepper from './components/molecules/stepper'
// import DetailCard from './components/organisms/detailCard'
// import Filter from './components/organisms/filter'
// import

function App() {
    // const [additional, setAdditional] = React.useState<additional>()

    return (
        <>
            {/* <DetailCard
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
            <RadioButtons value="no" /> */}
            {/* <LocationBar location="East Marredpally, Secunderabad"/> */}
            {/* <CabDetail cab="Uber" detail="1200" src="/assets/icons/uber.svg"/> */}
            {/* <SavedJobCard 
            role="User Experience Designer"
            src="abc"
            companyName='Myntra'
            time='36 min ago'
            location="Hyderabad"
            isHovered
            /> */}
            <SearchBar />
        </>
    )
}

export default App
