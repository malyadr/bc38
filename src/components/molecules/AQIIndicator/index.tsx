// import Typography from '@mui/material/Typography'
import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import Logo from '../../../../public/assets/images/AQI.png'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    index: {
        width: '100%',
        height: '100%',
        lineHeight: '48px',
        fontWeight: '800',
        position: 'absolute',
        top: '0px',
        align: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

interface Props {
    index?: string
    size: 'small' | 'large'
}

const AqiIndicator = ({ index, size }: Props) => {
    const classes = useStyles()
    const [width, setWidth] = useState<string>()
    const [height, setHeight] = useState<string>()
    useEffect(() => {
        if (size === 'large') {
            setWidth('242px')
            setHeight('240px')
        } else {
            setWidth('173px')
            setHeight('173px')
        }
    }, [size])
    return (
        <>
            <Box
                sx={{
                    maxWidth: { width },
                    height: { height },
                    position: 'relative',
                }}
            >
                <Box
                    component="img"
                    src={Logo}
                    sx={{ width: '100%', height: { height } }}
                />
                <Typography
                    color="alpha600.main"
                    sx={{ fontSize: '48px' }}
                    className={classes.index}
                >
                    {index}
                </Typography>
            </Box>
        </>
    )
}

export default AqiIndicator
