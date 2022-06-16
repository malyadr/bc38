import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Divider } from '@mui/material'
import { SIDESTEPS } from '../../../constants/constants'
import Icon from '../../atoms/Icon'
import theme from '../../../theme/customTheme'
import { FindJobs } from '../FindJobs'
import data from '../../../../db.json'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

interface SideNavProps {
    style?: React.CSSProperties
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{
                flexGrow: 1,
                width: '100%',
                height: window.innerHeight,
                background: theme.palette.additional.main,
                overflow: 'auto',
            }}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}

export default function SideNav({ style }: SideNavProps) {
    const [value, setValue] = React.useState(1)

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

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
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FindJobs data={data.job} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
            <TabPanel value={value} index={7}>
                Item Eight
            </TabPanel>
            <TabPanel value={value} index={8}>
                Item Nine
            </TabPanel>
        </Box>
    )
}
