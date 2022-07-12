import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, CardActions, Typography } from '@mui/material'
import Icon from '../../atoms/Icon'
import theme, { iconType, imageTypes } from '../../../theme/customTheme'
import Img from '../../atoms/Image'
import { makeStyles } from '@mui/styles'
import { getRoutes } from '../../services/routesService'

const styles = makeStyles({
    root: {
        borderColor: theme.palette.alpha200.main,
        borderWidth: '2px',
        borderStyle: 'solid',
    },
})

interface CardProps {
    id: number
    src: imageTypes
    role: string
    companyName: string
    location: string
    time: string
    isBordered: boolean
}

const SavedJobCard = ({
    id,
    src,
    role,
    companyName,
    location,
    time,
    isBordered,
}: CardProps) => {
    const classes = styles()
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
    return (
        <>
            <Card
                sx={{
                    width: '51vw',
                    minWidth: '571px',
                    height: '21vh',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: '12px',
                    p: '10px 19px 10px 19px',
                    background: 'gammaWhite.main',
                    marginLeft: '2px',
                    '&:hover': {
                        borderColor: 'alpha200.main',
                        borderWidth: '2px',
                        borderStyle: 'solid',
                    },
                    boxShadow: 'none',
                }}
                className={isBordered ? classes.root : ''}
            >
                <Box sx={{ display: 'flex' }}>
                    <div
                        style={{
                            alignSelf: 'flex-start',
                            position: 'relative',
                        }}
                    >
                        <Img
                            src={src}
                            sx={{ fontSize: '45px', marginTop: '20px' }}
                        />
                    </div>
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            height: '70px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography
                            variant="h2"
                            color="betaHigh.main"
                            sx={{ height: '30px' }}
                        >
                            {role}
                        </Typography>
                        <Typography
                            variant="caption2"
                            component="div"
                            color="gammaAccent2.main"
                            sx={{
                                height: '16px',
                                marginTop: '4px',
                                marginBottom: '4px',
                            }}
                        >
                            {companyName}
                        </Typography>
                        <Typography
                            variant="caption2"
                            sx={{ height: '16px', marginBottom: '36px' }}
                            color="betaMedium.main"
                        >
                            {location}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginTop: '11px',
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
                    </CardContent>
                </Box>
                <CardActions
                    sx={{
                        position: 'relative',
                        height: '137px',
                        top: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                    }}
                >
                    <Icon src="more" sx={{ color: 'betaMedium' }} />
                    <Typography
                        variant="caption1"
                        color="betaMedium.main"
                        sx={{
                            width: 'fit-content',
                            position: 'relative',
                            top: '15px',
                        }}
                    >
                        {time}
                    </Typography>
                </CardActions>
            </Card>
        </>
    )
}

export default SavedJobCard
