import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Divider, Grid } from '@mui/material'
import { SIDESTEPS, BASE_URL } from '../../../constants/constants'
import Icon from '../../atoms/Icon'
import theme, { imageTypes } from '../../../theme/customTheme'
import { FindJobs } from '../FindJobs'
import SavedJobCard from '../SavedJobCard'
import axios from 'axios'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

interface SideNavProps {
    style?: React.CSSProperties
}

interface JobProps {
    id: number;
    image: imageTypes;
    role: string;
    jobLocation: string;
    company: string;
    time: string;
    saved: boolean;
    applied: boolean;

}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            sx={{
                flexGrow: 1,
                width: '100%',
                height:'auto',
                bgcolor: 'additional.main',
                overflow: 'auto',
                paddingLeft: '50px',
                paddingTop: '20px',
                paddingBottom: '100px',
                '&::-webkit-scrollbar': {
                    width: 0
                }
                
                
            }}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    )
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}

export default function SideNav({ style }: SideNavProps) {
    const [value, setValue] = useState(1)

    const [jobs, setJobs] = useState<JobProps[]>([])
    const [state, setState] = useState<boolean>(true);
    const [clickStatus, setStatus] = useState<number>(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }
    useEffect(() => {
        const getData = async () => {
             const { data } = await axios.get(BASE_URL)
             setJobs(data)
         }
        getData();
    }, [state])
    
    return (
        <Box
            style={style}
            sx={{
                flexGrow: 1,
                bgcolor: 'gammaWhite.main',
                display: 'flex',
                height: '100%',
                width: '100%',
            }}
        >
            <Tabs
                centered
                orientation="vertical"
                value={value}
                textColor="inherit"
                onChange={handleChange}
                aria-label="Vertical tabs example"
                data-testid="navbar"
                sx={{
                    textTransform: 'none',
                    textDecoration: 'none',
                    borderRight: 1,
                    borderColor: 'divider',
                    width: '270px',
                    height: '100%',
                    display: 'flex',
                    pt: '20px',
                    flexDirection: 'column',
                    '.Mui-selected': {
                        bgcolor: 'gammaColor1.main',
                        color: 'alpha500.main',
                        height: '48px',
                        fontWeight: '600',
                        'svg > circle': {
                            fill: 'inherit',
                        },
                        'svg > path': {
                            fill: theme.palette.alpha500.main,
                        },
                    },
                    '.MuiTab-root': {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        overflow: 'visible',
                        minHeight: '48px',
                        gap: '28px',
                        paddingLeft: '40px',
                        marginTop: '16px',
                    },
                    '.MuiTabs-indicator': {
                        width: '4px',
                        bgcolor: 'alpha500.main',
                        borderRadius: '4px 0px 0px 4px',
                    },
                    '.MuiTabs-root': {
                        width: '270px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '1000px',
                        justifyContent: 'space-between',
                    },
                }}
            >
                <Tab
                    label={
                        <Typography variant="body2">{SIDESTEPS[0]}</Typography>
                    }
                    icon={
                        <Icon
                            src="dashboard"
                            sx={{
                                overflow: 'visible',
                                position: 'relative',
                                bottom: '5px',
                            }}
                        />
                    }
                    iconPosition="start"
                    {...a11yProps(0)}
                />
                <Tab
                    label={
                        <Typography variant="body2">{SIDESTEPS[1]}</Typography>
                    }
                    icon={
                        <Icon
                            src="jobs"
                            sx={{
                                overflow: 'visible',
                                position: 'relative',
                                bottom: '5px',
                            }}
                        />
                    }
                    iconPosition="start"
                    {...a11yProps(1)}
                    onClick={() => setState(!state)}
                />
                <Tab
                    label={
                        <Typography variant="body2">{SIDESTEPS[2]}</Typography>
                    }
                    icon={
                        <Icon
                            src="save"
                            sx={{
                                overflow: 'visible',
                                position: 'relative',
                                bottom: '5px',
                            }}
                        />
                    }
                    onClick={() => setState(!state)}
                    iconPosition="start"
                    {...a11yProps(2)}
                />
                <Tab
                    label={
                        <Typography variant="body2">{SIDESTEPS[3]}</Typography>
                    }
                    icon={
                        <Icon
                            src="test"
                            sx={{
                                overflow: 'visible',
                                position: 'relative',
                                bottom: '5px',
                            }}
                        />
                    }
                    iconPosition="start"
                    {...a11yProps(3)}
                />
                <Tab
                    label={
                        <Typography variant="body2">{SIDESTEPS[4]}</Typography>
                    }
                    icon={
                        <Icon
                            src="news"
                            sx={{
                                overflow: 'visible',
                                position: 'relative',
                                bottom: '5px',
                            }}
                        />
                    }
                    iconPosition="start"
                    {...a11yProps(4)}
                />
                <Divider variant="middle" sx={{ marginTop: '16px' }} />
                <Tab
                    label={
                        <Typography variant="body2">{SIDESTEPS[5]}</Typography>
                    }
                    icon={
                        <Icon
                            src="help"
                            sx={{
                                overflow: 'visible',
                                position: 'relative',
                                bottom: '5px',
                            }}
                        />
                    }
                    iconPosition="start"
                    {...a11yProps(5)}
                />
                <Tab
                    label={
                        <Typography variant="body2">{SIDESTEPS[6]}</Typography>
                    }
                    icon={
                        <Icon
                            src="contact"
                            sx={{
                                overflow: 'visible',
                                position: 'relative',
                                bottom: '5px',
                            }}
                        />
                    }
                    iconPosition="start"
                    {...a11yProps(6)}
                />
                <Tab
                    label={
                        <Typography variant="body2">{SIDESTEPS[7]}</Typography>
                    }
                    icon={
                        <Icon
                            src="settings"
                            sx={{
                                overflow: 'visible',
                                position: 'relative',
                                bottom: '5px',
                            }}
                        />
                    }
                    iconPosition="start"
                    {...a11yProps(7)}
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FindJobs data={jobs} setState={setState} setStatus={setStatus} clickStatus={clickStatus}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography variant="h2" sx={{mb:'40px'}}>Saved Jobs</Typography>
                <Grid container spacing={2} direction="column" sx={{gap:'30px'}}>
                    {jobs
                        .filter((job: JobProps) => job.saved === true)
                        .map((j: JobProps) => {
                            return (
                                <SavedJobCard
                                    src={j.image}
                                    role={j.role}
                                    companyName={j.company}
                                    location={j.jobLocation}
                                    time={j.time} isBordered={false}                                />
                            )
                        })}
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={3}>
               
            </TabPanel>
            <TabPanel value={value} index={4}>
                
            </TabPanel>
            <TabPanel value={value} index={5}>
            
            </TabPanel>
            <TabPanel value={value} index={6}>
                
            </TabPanel>
            <TabPanel value={value} index={7}>
                
            </TabPanel>
            <TabPanel value={value} index={8}>
                
            </TabPanel>
        </Box>
    )
}
