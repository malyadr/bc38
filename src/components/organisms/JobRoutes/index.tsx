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
} from '../../../constants/constants'
import bike from '../../../../public//assets/icons/bike.svg'
import bus from '../../../../public/assets/icons/bus.svg'
import car from '../../../../public/assets/icons/car.svg'
import train from '../../../../public/assets/icons/train.svg'
import rupee from '../../../../public/assets/icons/rupee.svg'
import circle from '../../../../public/assets/icons/Ellipse 7.svg'

const styles = makeStyles({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
})

export const Routes = () => {
    const [transport, setTransport] = useState('')

    const classes = styles()
    return (
        <Box sx={{ width: '404px' }}>
            <CommonRoutes
                from={'E Marredpally, Secunderabad'}
                to={'Hitech City, Telanagana, Hyderabad.'}
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
                        marginRight: '4px',
                    }}
                    component={bike}
                    onClick={() => {
                        setTransport('')
                    }}
                    data-testid="bike"
                />
                {transport == 'buss' ? (
                    <Box sx={{ marginTop: '-8px', marginRight: '4px' }}>
                        <img
                            src="assets/icons/busHovered.svg"
                            onClick={() => {
                                setTransport('buss')
                            }}
                            data-testid="busHovered"
                        />
                    </Box>
                ) : (
                    <SvgIcon
                        sx={{ marginRight: '4px' }}
                        component={bus}
                        onClick={() => {
                            setTransport('buss')
                        }}
                        data-testid="busss"
                    />
                )}
                {transport == 'car' ? (
                    <Box sx={{ marginTop: '-8px', marginRight: '4px' }}>
                        <img
                            src="/assets/icons/carHover.svg"
                            onClick={() => {
                                setTransport('car')
                            }}
                            data-testid="carHovered"
                        />
                    </Box>
                ) : (
                    <SvgIcon
                        sx={{ marginRight: '4px' }}
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
                        marginLeft: '-0.366%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        width: '215px',
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
                        <SvgIcon component={circle} />
                    </Box>
                    <Box component="div">
                        <Typography variant="caption2" color="betaMedium.main">
                            {DISTANCES}
                        </Typography>
                    </Box>
                    <Box component="div">
                        <SvgIcon component={circle} />
                    </Box>
                    <Box component="div">
                        <Typography variant="caption2" color="betaMedium.main">
                            {DURATION}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {transport == 'buss' ? (
                <>
                    <Box
                        component="div"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            marginTop: '13px',
                            width: '',
                        }}
                    >
                        <Box component="div" style={{ marginBottom: '1.19%' }}>
                            <img src="assets/images/mapview.svg" />
                        </Box>
                        <Button1
                            variant="caption1"
                            TextColor="alpha400.main"
                            buttonVariant="text"
                            buttonColor="alpha400"
                            styles={{ width: '150px', height: '16px' }}
                        >
                            {VIEW}
                        </Button1>
                    </Box>
                </>
            ) : (
                <></>
            )}
            {transport == 'car' ? (
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
            ) : (
                <></>
            )}
        </Box>
    )
}
