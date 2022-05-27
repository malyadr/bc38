import * as React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Current } from '../../atoms/CurrentIcon'
import { COMMON_ROUTE } from '../../../constants/constants'
import Icon from '../../atoms/icon'
import Img from '../../atoms/image'
import { Box } from '@mui/system'
import back from '../../../../public/assets/icons/back.svg'
import circle from '../../../../public/assets/icons/Ellipse 7.svg'
import swap from '../../../../public//assets/icons/swap.svg'
import location from '../../../../public//assets/icons/location 3.svg'

const styles = makeStyles({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
})

type CommonRoutesProps = {
    from: string
    to: string
}

export const CommonRoutes = ({ from, to }: CommonRoutesProps) => {
    const classes = styles()
    return (
        <>
            <Box className={classes.flexRow} style={{ marginLeft: '1.46%' }}>
                <Icon src={back} />
                <Typography
                    variant="body1"
                    sx={{ marginLeft: '1.68%' }}
                    color="betaHigh.main"
                >
                    {COMMON_ROUTE}
                </Typography>
            </Box>

            <Box style={{ height: '9.19%' }}>
                <Box
                    style={{ marginTop: '2.75%', marginLeft: '3.14%' }}
                    className={classes.flexRow}
                >
                    <Current></Current>
                    <Typography
                        variant="caption2"
                        sx={{ marginLeft: '1%' }}
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
                            marginLeft: '3.44%',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <Img src={circle} />
                        <Img src={circle} />
                        <Img src={circle} />
                    </Box>
                    <Box style={{ marginLeft: '24.68%' }}>
                        <Icon src={swap} />
                    </Box>
                </Box>
                <Box
                    className={classes.flexRow}
                    style={{ marginLeft: '2.94%', marginBottom: '0.18%' }}
                >
                    <Box>
                        <Icon src={location} />
                    </Box>
                    <Typography
                        variant="caption2"
                        sx={{ marginLeft: '0.67%', marginBottom: '1.68%' }}
                        color="betaHigh.main"
                    >
                        {to}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
