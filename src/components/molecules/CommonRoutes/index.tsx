import * as React from 'react'
import { SvgIcon, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Current } from '../../atoms/CurrentIcon'
import { COMMON_ROUTE } from '../../../constants/constants'
import { Box } from '@mui/system'
import back from '../../../../public/assets/icons/back.svg'
import circle from '../../../../public/assets/icons/Ellipse 7.svg'
import swap from '../../../../public//assets/icons/swap.svg'
import location from '../../../../public/assets/icons/location 3.svg'

const styles = makeStyles({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
})

type CommonRoutesProps = {
    from: string
    to: string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const CommonRoutes = ({ from, to, onClick }: CommonRoutesProps) => {
    const classes = styles()
    return (
        <>
            <Box className={classes.flexRow}>
                <SvgIcon
                    component={back}
                    sx={{ fill: 'transparent', color: 'betaHigh.main' }}
                    onClick={onClick}
                />
                <Typography
                    variant="body1"
                    sx={{ marginLeft: '8px' }}
                    color="betaHigh.main"
                >
                    {COMMON_ROUTE}
                </Typography>
            </Box>

            <Box style={{ height: '9.19%' }}>
                <Box
                    style={{ marginTop: '30px', marginLeft: '16px' }}
                    className={classes.flexRow}
                >
                    <Current></Current>
                    <Typography
                        variant="caption2"
                        sx={{ marginLeft: '8px' }}
                        color="betaHigh.main"
                    >
                        {from}
                    </Typography>
                </Box>
                <Box className={classes.flexRow}>
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '22px',
                            justifyContent: 'space-evenly',
                            paddingTop: '4px',
                        }}
                    >
                        <Box
                            sx={{
                                height: '4px',
                                width: '4px',
                                marginBottom: '4px',
                            }}
                        >
                            <SvgIcon component={circle} />
                        </Box>
                        <Box
                            sx={{
                                height: '4px',
                                width: '4px',
                                marginBottom: '4px',
                            }}
                        >
                            <SvgIcon component={circle} />
                        </Box>
                        <Box
                            sx={{
                                height: '4px',
                                width: '4px',
                                marginBottom: '4px',
                            }}
                        >
                            <SvgIcon component={circle} />
                        </Box>
                    </Box>
                    <Box style={{ marginLeft: '300px' }}>
                        <SvgIcon
                            component={swap}
                            sx={{ color: 'betaMedium.main' }}
                        />
                    </Box>
                </Box>
                <Box
                    className={classes.flexRow}
                    style={{ marginBottom: '0.18%', marginLeft: '12px' }}
                >
                    <Box>
                        <SvgIcon
                            component={location}
                            sx={{
                                fill: 'transparent',
                                marginTop: '-3px',
                            }}
                        />
                    </Box>
                    <Typography
                        variant="caption2"
                        sx={{ marginLeft: '5px', marginBottom: '1.68%' }}
                        color="betaHigh.main"
                    >
                        {to}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
