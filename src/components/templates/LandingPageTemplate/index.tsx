import { Stack, Paper } from '@mui/material'
import React from 'react'
import Img from '../../atoms/Image'

interface TemplateProps {
    left?: React.ReactNode
    right?: React.ReactNode
}

const LandingPageTemplate = ({ left, right }: TemplateProps) => {
    return (
        <>
            <Stack
                direction="row"
          sx={{
            height: window.innerHeight,
                    position: 'relative',
                    left: '0px',
                    top: '0px',
                    m: '0px',
                    p: '0px',
                }}
            >
                <Paper
                    // variant="elevation"
                    sx={{ width: '60%', background: 'white', pl:'200px', pt: 4 }}
                >
                    <Img src="logo2" />
                    {left}
                </Paper>
                <Paper
                    // variant="elevation"
                    sx={{ width: '40%', display: 'flex', justifyContent: 'center', alignItems:'center' }}
                >
                    {right}
                </Paper>
            </Stack>
        </>
    )
}

export default LandingPageTemplate
