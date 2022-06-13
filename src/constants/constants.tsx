import React from 'react'
import Back from '../../public/assets/icons/back.svg'
import Bike from '../../public/assets/icons/bike.svg'
import Bus from '../../public/assets/icons/bus.svg'
import Car from '../../public/assets/icons/car.svg'
import Close from '../../public/assets/icons/close.svg'
import Contact from '../../public/assets/icons/contact.svg'
import Current from '../../public/assets/icons/current.svg'
import Dashboard from '../../public/assets/icons/dashboard.svg'
import Done from '../../public/assets/icons/done.svg'
import Filter from '../../public/assets/icons/filter.svg'
import Circle from '../../public/assets/icons/circle.svg'
import Help from '../../public/assets/icons/help.svg'
import Jobs from '../../public/assets/icons/jobs.svg'
import Location from '../../public/assets/icons/location.svg'
import Location1 from '../../public/assets/icons/location1.svg'
import Message from '../../public/assets/icons/message.svg'
import More from '../../public/assets/icons/more.svg'
import News from '../../public/assets/icons/news.svg'
import Notifications from '../../public/assets/icons/notifications.svg'
import Rupee from '../../public/assets/icons/rupee.svg'
import Save from '../../public/assets/icons/save.svg'
import Search from '../../public/assets/icons/search.svg'
import Settings from '../../public/assets/icons/settings.svg'
import Swap from '../../public/assets/icons/swap.svg'
import Test from '../../public/assets/icons/test.svg'
import Tick from '../../public/assets/icons/tick.svg'
import Train from '../../public/assets/icons/train.svg'
import Upload from '../../public/assets/icons/upload.svg'
import Work from '../../public/assets/icons/work.svg'
import Aqi from '../../public/assets/images/aqi.png'
import BMW from '../../public/assets/images/bmw.png'
import Hitech from '../../public/assets/images/hitech.png'
import Hp from '../../public/assets/images/hp.png'
import Instagram from '../../public/assets/images/instagram.png'
import JobsLogo from '../../public/assets/images/jobs.png'
import Myntra from '../../public/assets/images/myntra.png'
import Ola from '../../public/assets/images/ola.png'
import Rapido from '../../public/assets/images/rapido.png'
import Stay from '../../public/assets/images/stay.png'
import Twitter from '../../public/assets/images/twitter.png'
import Uber from '../../public/assets/images/uber.png'
import Wipro from '../../public/assets/images/wipro.png'
import WorkLogo from '../../public/assets/images/work.png'
import Avatar from '../../public/assets/images/avatar.png'
import GreenCommute1 from '../../public/assets/images/logo1.png'
import GreenCommute2 from '../../public/assets/images/logo2.png'
import BusHovered from '../../public/assets/icons/busHovered.svg'
import CarHovered from '../../public/assets/icons/carHover.svg'
import From from '../../public/assets/icons/label.svg'
import To from '../../public/assets/icons/label 2.svg'
import SelectedBus from '../../public/assets/icons/SelectedBus.svg'
import SelectedCar from '../../public/assets/icons/selectedCar.svg'
import Line from '../../public/assets/icons/vector7.svg'
import MapView from '../../public/assets/images/mapView.png'

export const FILE_UPLOAD_TEXT = 'Click Here to Upload Files'
export const NEXT = 'Next'
export const BACK = 'Back'
export const SAVE = 'Save'
export const APPLY = 'Apply'
export const DESCRIPTION = 'Description'
export const SKIP = 'Skip'

interface IconsType {
    [key: string]: any
}

export const Icons: IconsType = {
    save: <Save />,
    dashboard: <Dashboard />,
    work: <Work />,
    test: <Test />,
    settings: <Settings />,
    news: <News />,
    help: <Help />,
    contact: <Contact />,
    done: <Done />,
    notifications: <Notifications />,
    search: <Search />,
    message: <Message />,
    bus: <Bus />,
    car: <Car />,
    train: <Train />,
    bike: <Bike />,
    more: <More />,
    filter: <Filter />,
    back: <Back />,
    location1: <Location1 />,
    location: <Location />,
    tick: <Tick />,
    current: <Current />,
    swap: <Swap />,
    rupee: <Rupee />,
    close: <Close />,
    upload: <Upload />,
    jobs: <Jobs />,
    circle: <Circle />,
    hoveredBus: <BusHovered />,
    hoveredCar: <CarHovered />,
    from: <From />,
    to: <To />,
    selectedBus: <SelectedBus />,
    selectedCar: <SelectedCar />,
    line: <Line />,
}
type LogosType = IconsType

export const Logos: LogosType = {
    aqi: <Aqi />,
    bmw: <BMW />,
    hp: <Hp />,
    instagram: <Instagram />,
    myntra: <Myntra />,
    ola: <Ola />,
    rapido: <Rapido />,
    twitter: <Twitter />,
    uber: <Uber />,
    wipro: <Wipro />,
    avatar: <Avatar />,
    work: <WorkLogo />,
    jobs: <JobsLogo />,
    hitech: <Hitech />,
    logo1: <GreenCommute1 />,
    logo2: <GreenCommute2 />,
    stay: <Stay />,
    mapView: <MapView />,
}
export const JOB_DETAIL =
    'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.'
export const ABOUT_TITLE = 'About the Company'
export const ABOUT_COMPANY =
    'High level of proficiency with leading UX Design software packages, such as Axure, Sketch,InVision, or Experience Design including the core Adobe Creative Suite products.'

export const SKILL_DETAILS =
    'Excellent written and oral communication and presentation skills'

export const SEE_MORE = 'SEE MORE'

export const STEPS = ['Your Location', 'Job Location', 'Your Skills']

export const DISTANCE = 'DISTANCE'
export const DISTANCE_VALUES = [
    '0-10 Kms',
    '11-20 Kms',
    '21-30 Kms',
    '31-40 Kms',
]
export const East_MAREDPALLY = 'East Marredpally, Secunderabad'

export const POSTED_DATE = 'Date Posted'
export const POSTED_DATE_VALUES = [
    'Pasted 24 hours',
    'Past week',
    'Past month',
    'Anything',
]

export const GREEN_COMMUTE = 'GREEN_COMMUTE'
export const GREEN_COMMUTE_VALUES = ['Yes', 'No']

export const JOB_DISTANCE = 'Job Distance'
export const JOB_DISTANCE_VALUES = [
    'Full Time',
    'Internship',
    'Contract',
    'Remote',
]

export const EXP_LEVEL = 'Experience Level'
export const EXP_LEVEL_VALUES = [
    'Fresher',
    'Mid-level',
    'Director',
    'Executive',
]

export const TRANSPORT = 'Transport'
export const TRANSPORT_MODES = ['Metro', 'Bus', 'Car pooling', 'Motor Cycle']
export const GREENCOMMUTE = 'GREEN COMMUTE'

export const CLEAR_ALL = 'Clear All'
export const GREEN_COMMUTE_ROUTE = ' Green Commute Routes'

export const COMMON_ROUTE = 'Common Routes'
export const CATCH_A_BLUE = 'Catch a blue line metro towards Raidurg'
export const DISTANCES = '25km'
export const COST = '100'
export const DURATION = '1 hr 20 mins'
export const COMMON_ROUTES_AVAILABLE = 'Commute routes available :'
export const APPROX = 'Approximately'

export const SIDESTEPS = [
    'Dashboard',
    'Find Jobs',
    'Saved Jobs',
    'Practice Test',
    'News & Events',
    'Need Help ?',
    'Contact Us',
    'Settings',
]

export const VIEW = 'View in Google Maps'
export const E_MAREDPALLY = 'E Marredpally, Secunderabad'
export const HITECH_CITY = 'Hitech City, Telanagana, Hyderabad.'
export const STEPPER = [
    'Where do you stay ?',
    'Where do you want to work?',
    'What do you want to do?',
]

export const LANDING_TITLE = 'More than 2000 people are using Green Commute'

export const STEPPER_ONE_OPTIONS = [
    'E Marredpally, Secunderabad, Hyderabad',
    'Delhi',
    'Mumbai',
]
export const STEPPER_TWO_OPTIONS = ['Hyderabad', 'Delhi', 'Mumbai']

export const STEPPER_THREE_OPTIONS = ['UI/UX Designer', 'Graphic Designer']
export const PLACEHOLDER = [
    'Enter your Location',
    'Enter your job location',
    'Enter your skills',
]

export const AQI_TITLE = 'Real Time Air Quality Index(AQI) in this location'
export const FILE_UPLOAD = 'File Upload'
export const HI_MESSAGE = ' Hi abc!'
export const SUCCESS_MESSAGE = 'Your Resume got Uploaded Successfully!'
export const OKAY = 'OKAY'
export const ENTER_SKILLS = "Enter your Skills to know how many jobs are in this Location"
export const ENTER_LOCATION = 'Enter Location to know Time Air Quality Index (AQI)'
