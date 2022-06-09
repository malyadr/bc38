import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Img from '../../atoms/image'

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
                <Img src="aqi" sx={{ width: { width }, height: { height }, '& svg': { stroke: 'white !important'} }} />
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
