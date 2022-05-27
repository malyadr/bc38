import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Icon from '../../atoms/icon'
import { COMMON_ROUTES_AVAILABLE } from '../../../constants/constants'
import more from '../../../../public/assets/icons/more.svg'
import bike from '../../../../public//assets/icons/bike.svg'
import bus from '../../../../public//assets/icons/bus.svg'
import car from '../../../../public//assets/icons/car.svg'
import train from '../../../../public//assets/icons/train.svg'

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
        width: '21.1%',
        height: '23.29%',
        padding: '17.5px',
    },
})

type JobCardProps = {
    src: string
    role: string
    companyName: string
    location: string
    time: string
}

export const JobCard = ({
    src,
    role,
    companyName,
    location,
    time,
}: JobCardProps) => {
    const classes = styles()
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.flexRow}>
                    <Icon src={src} />
                    <Icon src={more}></Icon>
                </Box>
                <Box className={classes.flexColumn}>
                    <Typography
                        variant="subtitle1"
                        color="betaHigh.main"
                        sx={{ marginTop: '3.76%', marginBottom: '0.36%' }}
                    >
                        {role}
                    </Typography>
                    <Typography variant="caption2" color="gammaAccent2.main">
                        {companyName}
                    </Typography>
                    <Typography
                        variant="caption2"
                        color="betaMedium.main"
                        sx={{ marginTop: '0.36%', marginBottom: '2.94%' }}
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
                            justifyContent: 'space-evenly',
                            marginTop: '5.5%',
                            width: '140px',
                        }}
                    >
                        <Icon src={bike} />
                        <Icon src={bus} />
                        <Icon src={car} />
                        <Icon src={train} />
                    </Box>
                    <Typography
                        variant="caption2"
                        color="betaHigh.main"
                        sx={{ marginTop: '5.5%' }}
                    >
                        {time}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
