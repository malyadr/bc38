import * as React from 'react'
import Modal from '@mui/material/Modal'

import { Grid } from '@mui/material'
import { Button1 } from '../Button'
import { APPLY } from '../../../constants/constants'
import FileUploader from '../FileUploader'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '400px',
    bgcolor: 'gammaWhite.main',
    boxShadow: 24,
    borderRadius: 2,
    p: '20px',
}

const Popup = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Button1
                TextColor="gammaWhite.main"
                variant="caption1"
                buttonVariant="contained"
                buttonColor="alpha400"
                styles={{ borderRadius: '8px' }}
                onClick={handleOpen}
            >
                {APPLY}
            </Button1>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container sx={style}>
                    <FileUploader setOpen={setOpen} />
                </Grid>
            </Modal>
        </>
    )
}

export default Popup