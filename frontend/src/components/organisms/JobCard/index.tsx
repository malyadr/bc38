import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import Icon from '../../atoms/Icon'
import {
    COMMON_ROUTES_AVAILABLE,
    RouteProps,
} from '../../../constants/constants'
import theme, { imageTypes } from '../../../theme/customTheme'
import Img from '../../atoms/Image'
import { getRoutes } from '../../services/routesService'

const styles = makeStyles({
    flexRow: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'none',
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    root: {
        width: '360px',
        height: '285px',
        padding: '21px',
        backgroundColor: theme.palette.gammaWhite.main,
        borderRadius: '12px',
    },
})

type JobCardProps = {
    id: number
    src: imageTypes
    role: string
    companyName: string
    location: string
    time: string
}

export const JobCard = ({
    id,
    src,
    role,
    companyName,
    location,
    time,
}: JobCardProps) => {
    const [values, setValues] = useState<boolean[]>([])

    useEffect(() => {
        if (id == 6) id = 5
        const val: boolean[] = []
        const route = getRoutes(id).then((res) => {
            val.push(res.bike)
            val.push(res.bus)
            val.push(res.cab)
            val.push(res.metro)
            setValues(val)
        })
    }, [id])
    const classes = styles()
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.flexRow}>
                    <Img src={src} />
                    <Icon src="more" />
                </Box>
                <Box className={classes.flexColumn}>
                    <Typography
                        variant="subtitle1"
                        color="betaHigh.main"
                        sx={{ marginTop: '41px', marginBottom: '4px' }}
                    >
                        {role}
                    </Typography>
                    <Typography variant="caption2" color="gammaAccent2.main">
                        {companyName}
                    </Typography>
                    <Typography
                        variant="caption2"
                        color="betaMedium.main"
                        sx={{ marginTop: '8px', marginBottom: '32px' }}
                    >
                        {location}
                    </Typography>
                    <Typography variant="caption2" color="betaHigh.main">
                        {COMMON_ROUTES_AVAILABLE}
                    </Typography>
                </Box>
                <Box className={classes.flexRow}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            marginTop: '11px',
                            width: '140px',
                        }}
                    >
                        {values[0] && (
                            <Icon src="bike" sx={{ marginRight: '16px' }} />
                        )}
                        {values[1] && (
                            <Icon src="bus" sx={{ marginRight: '16px' }} />
                        )}
                        {values[2] && (
                            <Icon
                                src="car"
                                sx={{
                                    marginRight: '16px',
                                    color: theme.palette.betaLow.main,
                                }}
                            />
                        )}
                        {values[3] && <Icon src="train" />}
                    </Box>
                    <Typography
                        variant="caption2"
                        color="betaHigh.main"
                        sx={{ marginTop: '18px' }}
                    >
                        {time}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
