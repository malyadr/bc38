import * as React from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import GroupFilter from '../../../../public/assets/icons/GroupFilter.svg'
import { Box, Grid, Typography } from '@mui/material'
import ControlledCheckbox from '../../molecules/checkBox'
import RadioButtons from '../../molecules/radioButtons'
import { Button1 } from '../../molecules/button'
import {
    APPLY,
    CLEAR_ALL,
    DISTANCE,
    DISTANCE_VALUES,
    EXP_LEVEL,
    EXP_LEVEL_VALUES,
    GREEN_COMMUTE,
    GREEN_COMMUTE_VALUES,
    JOB_DISTANCE,
    JOB_DISTANCE_VALUES,
    POSTED_DATE,
    POSTED_DATE_VALUES,
    TRANSPORT,
    TRANSPORT_MODES,
} from '../../../constants/constants'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '546px',
    height: '464px',
    bgcolor: 'gammaWhite.main',
    boxShadow: 24,
    borderRadius: 2,
    p: '20px',
}

const Filter = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Button
                startIcon={<Box component="img" src={GroupFilter} />}
                onClick={handleOpen}
                sx={{
                    borderRadius: 5,
                    textTransform: 'capitalize',
                    width: '137px',
                    height: '57px',
                }}
                color="betaHigh"
            >
                Filter
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container sx={style}>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh">
                            {DISTANCE}
                        </Typography>

                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} />
                            {DISTANCE_VALUES[0]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />
                            {DISTANCE_VALUES[1]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />
                            {DISTANCE_VALUES[2]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />
                            {DISTANCE_VALUES[3]}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh">
                            {POSTED_DATE}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} />{' '}
                            {POSTED_DATE_VALUES[0]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            {POSTED_DATE_VALUES[1]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            {POSTED_DATE_VALUES[2]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            {POSTED_DATE_VALUES[3]}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh">
                            {GREEN_COMMUTE}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <RadioButtons value="yes" />{' '}
                            {GREEN_COMMUTE_VALUES[0]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <RadioButtons value="no" />{' '}
                            {GREEN_COMMUTE_VALUES[1]}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh">
                            {JOB_DISTANCE}
                        </Typography>

                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} />{' '}
                            {JOB_DISTANCE_VALUES[0]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            {JOB_DISTANCE_VALUES[1]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            {JOB_DISTANCE_VALUES[2]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            {JOB_DISTANCE_VALUES[3]}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh">
                            {EXP_LEVEL}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} />{' '}
                            {EXP_LEVEL_VALUES[0]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            {EXP_LEVEL_VALUES[1]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            {EXP_LEVEL_VALUES[2]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            {EXP_LEVEL_VALUES[3]}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh">
                            {TRANSPORT}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} />{' '}
                            {TRANSPORT_MODES[0]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} />{' '}
                            {TRANSPORT_MODES[1]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} />{' '}
                            {TRANSPORT_MODES[2]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} />{' '}
                            {TRANSPORT_MODES[3]}
                        </Typography>
                    </Grid>

                    <Box sx={{ justifyContent: 'flex-end' }}>
                        <Button1
                            TextColor="alpha300.main"
                            variant="caption1"
                            buttonVariant="text"
                            buttonColor="alpha300"
                            styles={{ borderRadius: '8px' }}
                            onClick={undefined}
                        >
                            {CLEAR_ALL}
                        </Button1>
                        <Button1
                            TextColor="gammaWhite.main"
                            variant="caption1"
                            buttonVariant="contained"
                            buttonColor="alpha400"
                            styles={{ borderRadius: '8px' }}
                            onClick={undefined}
                        >
                            {APPLY}
                        </Button1>
                    </Box>
                </Grid>
            </Modal>
        </>
    )
}

export default Filter
