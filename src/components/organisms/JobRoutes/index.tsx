import * as React from 'react'
import { Box, Typography, SvgIcon } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { Button1 } from '../../molecules/button'
import CabDetail from '../../molecules/CabDetail'
import { CommonRoutes } from '../../molecules/CommonRoutes'
import {
    CATCH_A_BLUE,
    DURATION,
    DISTANCES,
    COST,
    VIEW,
    E_MAREDPALLY,
    HITECH_CITY,
} from '../../../constants/constants'
import bike from '../../../../public//assets/icons/bike.svg'
import bus from '../../../../public/assets/icons/bus.svg'
import car from '../../../../public/assets/icons/car.svg'
import train from '../../../../public/assets/icons/train.svg'
import rupee from '../../../../public/assets/icons/rupee.svg'
import circle from '../../../../public/assets/icons/Ellipse 7.svg'
import hoveredBus from '../../../../public/assets/icons/busHovered.svg'
import map from '../../../../public/assets/images/mapview.png'
import hoveredCar from '../../../../public/assets/icons/carHover.svg'
import vector from '../../../../public/assets/images/Vector 7.png'
import location1 from '../../../../public/assets/icons/location 1.svg'
import location2 from '../../../../public/assets/icons/location 2.svg'
import label from '../../../../public/assets/icons/label.svg'
import label2 from '../../../../public/assets/icons/label 2.svg'

import theme from '../../../theme/customTheme'

const styles = makeStyles({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
})

type RoutesProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const Routes = ({ onClick }: RoutesProps) => {
    const [transport, setTransport] = useState('bus')

    const classes = styles()
    return (
        <Box sx={{ width: '404px', height: 'fit-content' }}>
            <CommonRoutes
                from={E_MAREDPALLY}
                to={HITECH_CITY}
                onClick={onClick}
            ></CommonRoutes>
            <Box
                component="div"
                style={{
                    marginLeft: '16px',
                    marginTop: '21.5px',
                    display: 'flex',
                }}
            >
                <SvgIcon
                    sx={{
                        width: '24px',
                        height: '24px',
                        marginRight: '20px',
                    }}
                    component={bike}
                    onClick={() => {
                        setTransport('')
                    }}
                    data-testid="bike"
                />
                {transport === 'bus' ? (
                    <Box
                        style={{
                            height: '38px',
                            width: '38px',
                            borderRadius: '50%',
                            backgroundColor: theme.palette.alpha400.main,
                            marginTop: '-8px',
                            marginRight: '20px',
                        }}
                    >
                        <SvgIcon
                            component={hoveredBus}
                            onClick={() => {
                                setTransport('bus')
                            }}
                            data-testid="busHovered"
                            sx={{
                                height: '60%',
                                width: '60%',
                                marginTop: '7px',
                                marginLeft: '7px',
                                marginRight: '20px',
                            }}
                        />
                    </Box>
                ) : (
                    <SvgIcon
                        sx={{ marginRight: '20px' }}
                        component={bus}
                        onClick={() => {
                            setTransport('bus')
                        }}
                        data-testid="buss"
                    />
                )}
                {transport === 'car' ? (
                    <Box
                        style={{
                            height: '38px',
                            width: '38px',
                            borderRadius: '50%',
                            backgroundColor: theme.palette.alpha400.main,
                            marginTop: '-8px',
                            marginRight: '20px',
                        }}
                    >
                        <SvgIcon
                            component={hoveredCar}
                            onClick={() => {
                                setTransport('car')
                            }}
                            data-testid="carHovered"
                            sx={{
                                height: '60%',
                                width: '60%',
                                marginTop: '7px',
                                marginLeft: '7px',
                                marginRight: '20px',
                            }}
                        />
                    </Box>
                ) : (
                    <SvgIcon
                        sx={{ marginRight: '20px' }}
                        component={car}
                        onClick={() => {
                            setTransport('car')
                        }}
                        data-testid="car"
                    />
                )}
                <SvgIcon
                    sx={{ marginRight: '4px' }}
                    component={train}
                    onClick={() => {
                        setTransport('')
                    }}
                    data-testid="train"
                />
            </Box>
            <Box
                component="div"
                style={{ marginTop: '2.20%', marginLeft: '16px' }}
            >
                <Box component="div" style={{ marginBottom: '0.82%' }}>
                    <Typography variant="body2" color="betaHigh.main">
                        {CATCH_A_BLUE}
                    </Typography>
                </Box>
                <Box
                    component="div"
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        width: '250px',
                        marginTop: '9px',
                    }}
                >
                    <Box component="div" className={classes.flexRow}>
                        <Box
                            component="div"
                            style={{
                                marginRight: '7px',
                            }}
                        >
                            <SvgIcon component={rupee} />
                        </Box>
                        <Box component="div">
                            <Typography
                                variant="caption2"
                                color="betaMedium.main"
                            >
                                {COST}
                            </Typography>
                        </Box>
                    </Box>
                    <Box component="div">
                        <SvgIcon
                            component={circle}
                            sx={{ marginLeft: '10px', marginTop: '9px' }}
                        />
                    </Box>
                    <Box component="div">
                        <Typography variant="caption2" color="betaMedium.main">
                            {DISTANCES}
                        </Typography>
                    </Box>
                    <Box component="div">
                        <SvgIcon
                            component={circle}
                            sx={{ marginLeft: '10px', marginTop: '9px' }}
                        />
                    </Box>
                    <Box component="div">
                        <Typography variant="caption2" color="betaMedium.main">
                            {DURATION}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {transport === 'bus' && (
                <>
                    <Box
                        component="div"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            marginTop: '13px',
                            width: '',
                            marginLeft: '16px',
                        }}
                    >
                        <Box
                            component="div"
                            sx={{
                                position: 'relative',
                                marginBottom: '1.19%',
                            }}
                        >
                            <Box
                                component="img"
                                src={map}
                                sx={{
                                    height: '143px',
                                    width: '361px',
                                }}
                            />
                            <Box
                                component="img"
                                src={vector}
                                sx={{
                                    position: 'absolute',
                                    top: '44px',
                                    left: '75px',
                                    fill: 'white',
                                }}
                            />
                            <SvgIcon
                                component={location1}
                                sx={{
                                    position: 'absolute',
                                    top: '31px',
                                    left: '54px',
                                }}
                            />
                            <SvgIcon
                                component={location2}
                                sx={{
                                    position: 'absolute',
                                    top: '80px',
                                    left: '287px',
                                    fill: 'transparent',
                                }}
                            />
                            <Box
                                component={label}
                                sx={{
                                    position: 'absolute',
                                    top: '51px',
                                    left: '16px',
                                    fill: 'transparent',
                                }}
                            ></Box>
                            <Box
                                component={label2}
                                sx={{
                                    position: 'absolute',
                                    top: '53px',
                                    left: '256px',
                                    fill: 'transparent',
                                }}
                            ></Box>
                        </Box>
                        <Button1
                            variant="caption1"
                            TextColor="alpha400.main"
                            buttonVariant="text"
                            buttonColor="alpha400"
                            styles={{
                                width: '150px',
                                height: '16px',
                                marginTop: '16px',
                            }}
                        >
                            {VIEW}
                        </Button1>
                    </Box>
                </>
            )}
            {transport === 'car' && (
                <>
                    <Box component="div" style={{ marginTop: '1.19%' }}>
                        <CabDetail
                            src="assets/icons/ola.svg"
                            cab="Ola"
                            detail="45"
                        />
                        <CabDetail
                            src="/assets/icons/uber.svg"
                            cab="Ola"
                            detail="45"
                        />
                        <CabDetail
                            src="/assets/icons/rapido.svg"
                            cab="Ola"
                            detail="45"
                        />
                    </Box>
                </>
            )}
        </Box>
    )
}
