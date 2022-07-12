import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import Icon from '../../atoms/Icon'
import { COMMON_ROUTES_AVAILABLE } from '../../../constants/constants'
import theme, { iconType, imageTypes } from '../../../theme/customTheme'
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
    const [icons, setIcons] = useState<iconType[]>([])

    useEffect(() => {
        const val: iconType[] = []
        getRoutes(id).then((res) => {
            if (res.bike) {
                val.push('bike')
            }
            if (res.bus) {
                val.push('bus')
            }
            if (res.cab) {
                val.push('car')
            }
            if (res.metro) {
                val.push('train')
            }
            setIcons(val)
        })
        console.log(icons)
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
                        {icons.map((icon) => {
                            return (
                                <Icon
                                    key={icons.indexOf(icon)}
                                    src={icon}
                                    sx={{
                                        marginRight: '16px',
                                        color: theme.palette.betaLow.main,
                                    }}
                                />
                            )
                        })}
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
