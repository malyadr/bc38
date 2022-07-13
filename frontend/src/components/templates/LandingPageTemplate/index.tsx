import { Stack, Paper} from '@mui/material'
import React from 'react'

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
                    sx={{
                        width: '60%',
                        background: 'white',
                        pt: 4,
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {left}
                </Paper>
                <Paper
                    sx={{
                        width: '40%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {right}
                </Paper>
            </Stack>
        </>
    )
}

export default LandingPageTemplate
