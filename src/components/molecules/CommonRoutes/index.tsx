import * as React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Current } from '../../atoms/CurrentIcon'
import { COMMON_ROUTE } from '../../../constants/constants'
import { Box } from '@mui/system'
import Icon from '../../atoms/Icon'
import theme from '../../../theme/customTheme'

const styles = makeStyles({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        width:'359px'
    },
})

type CommonRoutesProps = {
    from: string
    to: string
    onClick?: React.MouseEventHandler<SVGSVGElement> 
}

export const CommonRoutes = ({ from, to, onClick }: CommonRoutesProps) => {
    const classes = styles()
    return (
        <>
            <Box className={classes.flexRow} sx={{bgcolor:'gammaWhite.main'}}>
                <Icon
                    src="back"
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

            <Box sx={{ height: '9.19%',  width:'359px', bgcolor:'gammaWhite.main' }}>
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
                            <Icon src="circle" />
                        </Box>
                        <Box
                            sx={{
                                height: '4px',
                                width: '4px',
                                marginBottom: '4px',
                            }}
                        >
                            <Icon src="circle" />
                        </Box>
                        <Box
                            sx={{
                                height: '4px',
                                width: '4px',
                                marginBottom: '4px',
                            }}
                        >
                            <Icon src="circle" />
                        </Box>
                    </Box>
                    <Box style={{ marginLeft: '300px' }}>
                        <Icon
                            src="swap"
                            sx={{ color: 'betaMedium.main' }}
                        />
                    </Box>
                </Box>
                <Box
                    className={classes.flexRow}
                    style={{ marginBottom: '0.18%', marginLeft: '12px' }}
                >
                    <Box>
                        <Icon
                            src="location1"
                            sx={{
                                stroke:theme.palette.gammaAccent1.main,
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
