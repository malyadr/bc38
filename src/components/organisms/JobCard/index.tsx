import { Box, SvgIcon, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Icon from '../../atoms/icon'
import { COMMON_ROUTES_AVAILABLE } from '../../../constants/constants'
import more from '../../../../public/assets/icons/more.svg'
import bike from '../../../../public//assets/icons/bike.svg'
import bus from '../../../../public//assets/icons/bus.svg'
import car from '../../../../public//assets/icons/car.svg'
import train from '../../../../public//assets/icons/train.svg'
import theme from '../../../theme/customTheme'

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
        backgroundColor: theme.palette.gammaWhite.main,
        borderRadius: '12px',
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
                    <SvgIcon component={more} />
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
                        sx={{ marginTop: '4px', marginBottom: '32px' }}
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
                        <SvgIcon
                            component={bike}
                            sx={{ marginRight: '16px' }}
                        />
                        <SvgIcon component={bus} sx={{ marginRight: '16px' }} />
                        <SvgIcon component={car} sx={{ marginRight: '16px' }} />
                        <SvgIcon component={train} />
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
