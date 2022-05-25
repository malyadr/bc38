import * as React from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'

import { Box, Grid, Typography } from '@mui/material'
import ControlledCheckbox from '../../molecules/checkBox'
import RadioButtons from '../../molecules/radioButtons'
import { Button1 } from '../../molecules/button'

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
                startIcon={
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.99999 2H13L7.98999 8.3L2.99999 2ZM0.249995 1.61C2.26999 4.2 5.99999 9 5.99999 9V15C5.99999 15.55 6.44999 16 6.99999 16H9C9.55 16 10 15.55 10 15V9C10 9 13.72 4.2 15.74 1.61C16.25 0.95 15.78 0 14.95 0H1.03999C0.209995 0 -0.260005 0.95 0.249995 1.61Z"
                            fill="#656E66"
                        />
                    </svg>
                }
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
                            Distance
                        </Typography>

                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} /> 0-10
                            Kms
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} /> 11-20
                            Kms
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} /> 21-30
                            Kms
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} /> 31-40
                            Kms
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh">
                            Date Posted
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} /> Pasted
                            24 hours
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} /> Past
                            week
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} /> Past
                            month
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            Anything
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh">
                            Green Commute
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <RadioButtons value="yes" /> Yes
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <RadioButtons value="no" /> No
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh">
                            Job Distance
                        </Typography>

                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} /> Full
                            time
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            Internship
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            Contract
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} /> Remote
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh">
                            Experience Level
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} /> Fresher
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            Mid-level
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            Director
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={false} />{' '}
                            Executive
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh">
                            Transport
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} /> Metro
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} /> Bus
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} /> Car
                            pooling
                        </Typography>
                        <Typography variant="body2" color="betaMedium">
                            <ControlledCheckbox defaultChecked={true} /> Motor
                            Cycle
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
                            Clear All
                        </Button1>
                        <Button1
                            TextColor="gammaWhite.main"
                            variant="caption1"
                            buttonVariant="contained"
                            buttonColor="alpha400"
                            styles={{ borderRadius: '8px' }}
                            onClick={undefined}
                        >
                            Apply
                        </Button1>
                    </Box>
                </Grid>
            </Modal>
        </>
    )
}

export default Filter
