import { Stack, Paper} from '@mui/material'
import React from 'react'
import Img from '../../atoms/image';

interface TemplateProps {
    left: React.ReactNode;
}

const LandingPageTemplate = () => {
  return (
    <>
     <Stack direction="row" sx={{height:'768px', position:'relative', left:'0px', top:'0px', m: '0px', p: '0px'}}>
        <Paper variant="elevation" sx={{width:'60%', background:'white', pl:12, pt:4}}>
            <Img src="logo2" />
           
        </Paper>  
        <Paper variant="elevation" sx={{width:"40%", display: 'flex', alignItems:'center'}}>
        </Paper>
     </Stack>
    </>
  )
}

export default LandingPageTemplate