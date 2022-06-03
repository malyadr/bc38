import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ContactIcon, DashboardIcon, HelpIcon, JobsIcon, NewsIcon, SettingsIcon, SIDESTEPS, TestIcon } from '../../../constants/constants';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,

  };
}

export default function SideNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height:'100%',  '.Mui-selected': {
        color:'alpha500.main',
        background:'gammaColor1.main'
    } ,  }}
    >
      <Tabs
    //   centered
        orientation="vertical"
        value={value}
        textColor="inherit"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ textTransform:'none', textDecoration:'none', borderRight: 1, borderColor: 'divider', width:'270px', height:'100%', display:'flex', flexDirection:'column',
        '.Mui-selected': {
            background:"#E8FFFC",
        },
        '.MuiTab-wrapper': {
            alignItems: 'center',
            justifyContent: 'flex-start'
        }    
    }}
        TabIndicatorProps={{
            style:{
            background: "#1B877A",
            height:"72px",
            width:"4px"
        }}}
      >
        <Tab sx={{justifyContent:'flex-start', textTransform:"none"}}   label={<Typography variant='body2' >{SIDESTEPS[0]}</Typography>} icon={<DashboardIcon/>} iconPosition='start' {...a11yProps(0)} />
        <Tab sx={{justifyContent:'flex-start', textTransform:"none"}}   label={<Typography  variant='body2'>{SIDESTEPS[1]}</Typography>}  icon={<JobsIcon/>} iconPosition='start' {...a11yProps(1)} />
        <Tab sx={{justifyContent:'flex-start', textTransform:"none"}}   label={<Typography variant='body2'>{SIDESTEPS[2]}</Typography>}  icon={<TestIcon/>} iconPosition='start' {...a11yProps(2)} />
        <Tab sx={{justifyContent:'flex-start', textTransform:"none"}}   label={<Typography variant='body2'>{SIDESTEPS[3]}</Typography>} icon={<SettingsIcon/>} iconPosition='start' {...a11yProps(3)} />
        <Tab sx={{justifyContent:'flex-start', textTransform:"none"}}   label={<Typography variant='body2'>{SIDESTEPS[4]}</Typography>} icon={<NewsIcon/>} iconPosition='start' {...a11yProps(4)} />
        <Tab sx={{justifyContent:'flex-start', textTransform:"none"}}   label={<Typography variant='body2'>{SIDESTEPS[5]}</Typography>} icon={<HelpIcon/>} iconPosition='start' {...a11yProps(5)} />
        <Tab sx={{justifyContent:'flex-start', textTransform:"none"}}   label={<Typography variant='body2'>{SIDESTEPS[6]}</Typography>} icon={<ContactIcon/>} iconPosition='start' {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
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
    </Box>
  );
}