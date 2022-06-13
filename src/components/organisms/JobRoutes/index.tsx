import * as React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { Button1 } from '../../molecules/Button'
import CabDetail from '../../molecules/CabDetail'
import { CommonRoutes } from '../../molecules/CommonRoutes'

import Line from '../../../../public/assets/images/vector.png'

import From from '../../../../public/assets/icons/label.svg'
import To from '../../../../public/assets/icons/label 2.svg'

import {
    CATCH_A_BLUE,
    DURATION,
    DISTANCES,
    COST,
    VIEW,
    E_MAREDPALLY,
    HITECH_CITY,
} from '../../../constants/constants'

import theme from '../../../theme/customTheme'
import Icon from '../../atoms/Icon'
import Img from '../../atoms/Image'

const styles = makeStyles({
    flexRow: {
        height: '16px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
})

type RoutesProps = {
    onClick?: React.MouseEventHandler<SVGSVGElement>
}

export const Routes = ({ onClick }: RoutesProps) => {
    const [transport, setTransport] = useState('bus')

    const classes = styles()
    return (
        <Box
            sx={{
                bgcolor: 'gammaWhite.main',
                maxWidth: '404px',
                height: 'fit-content',
            }}
        >
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
                <Icon
                    sx={{
                        width: '24px',
                        height: '24px',
                        marginRight: '20px',
                    }}
                    src="bike"
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
                        <Icon
                            src="hoveredBus"
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
                    <Icon
                        sx={{ marginRight: '20px' }}
                        src="bus"
                        onClick={() => {
                            setTransport('bus')
                        }}
                        data-testid="testBus"
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
                        <Icon
                            src="hoveredCar"
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
                    <Icon
                        sx={{ marginRight: '20px', color: 'betaLow.main' }}
                        src="car"
                        onClick={() => {
                            setTransport('car')
                        }}
                        data-testid="car"
                    />
                )}
                <Icon
                    sx={{ marginRight: '4px' }}
                    src="train"
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
                                height: '16px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Icon src="rupee" />
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
                        <Icon
                            src="circle"
                            sx={{ marginLeft: '10px', marginTop: '9px' }}
                        />
                    </Box>
                    <Box component="div">
                        <Typography variant="caption2" color="betaMedium.main">
                            {DISTANCES}
                        </Typography>
                    </Box>
                    <Box component="div">
                        <Icon
                            src="circle"
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
                            marginLeft: '16px',
                        }}
                    >
                        <Box
                            component="div"
                            sx={{
                                position: 'relative',
                                marginBottom: '1.19%',
                                display: 'flex',
                                justifyContent: 'center',
                                right: '15px',
                            }}
                        >
                            <Img
                                src="mapView"
                                sx={{
                                    height: '143px',
                                    width: '361px',
                                }}
                            />
                            <Box
                                component="img"
                                src={Line}
                                sx={{
                                    position: 'absolute',
                                    top: '44px',
                                    left: '75px',
                                    fill: 'white',
                                }}
                            />
                            <Icon
                                src="location"
                                sx={{
                                    position: 'absolute',
                                    top: '31px',
                                    left: '54px',
                                }}
                            />
                            <Icon
                                src="location1"
                                sx={{
                                    position: 'absolute',
                                    top: '80px',
                                    left: '287px',
                                    stroke: 'white',
                                }}
                            />
                            <Box
                                component={From}
                                sx={{
                                    position: 'absolute',
                                    top: '51px',
                                    left: '16px',
                                    fill: 'transparent',
                                }}
                            />

                            <Box
                                component={To}
                                sx={{
                                    position: 'absolute',
                                    top: '53px',
                                    left: '256px',
                                    fill: 'transparent',
                                }}
                            />
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
                                position: 'relative',
                                right: '20px',
                            }}
                        >
                            {VIEW}
                        </Button1>
                    </Box>
                </>
            )}
            {transport === 'car' && (
                <>
                    <Box
                        component="div"
                        style={{
                            marginTop: '1.19%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        <CabDetail src="ola" cab="Ola" detail="45" />
                        <CabDetail src="uber" cab="Uber" detail="45" />
                        <CabDetail src="rapido" cab="Rapido" detail="45" />
                    </Box>
                </>
            )}
        </Box>
    )
}
