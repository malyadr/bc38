import { Box, Grid, SvgIcon, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button1 } from '../button'
import {
    FILE_UPLOAD_TEXT,
    HI_MESSAGE,
    OKAY,
    SUCCESS_MESSAGE,
    FILE_UPLOAD,
} from '../../../constants/constants'
import success from '../../../../public/assets/images/success.png'
import close from '../../../../public/assets/icons/close.svg'

const style = {
    m: 2,
    border: '2px dashed',
    width: '590px',
    bgcolor: 'gammaAccent3.main',
    borderColor: 'alpha400.main',
    borderRadius: '12px',
    height: '268px',
    marginLeft: '30px',
}

const FileUploadPopup = ({ setOpen }: any) => {
    const [clickStatus, setStatus] = useState<boolean>(false)

    const hiddenFileInput = React.useRef<HTMLInputElement>(null)
    const handleClick = () => {
        hiddenFileInput.current && hiddenFileInput.current.click()
    }

    const handleChange = (event: any) => {
        const fileUploaded = event.target.files[0]
        setStatus(true)
        console.log(fileUploaded)
    }

    return (
        <Box sx={{ height: '400px', width: '700px' }}>
            {!clickStatus ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '10px',
                        marginBottom: '16px',
                    }}
                >
                    <Typography
                        color="betaMedium.main"
                        sx={{ marginLeft: '25px', fontSize: '20px' }}
                    >
                        {FILE_UPLOAD}
                    </Typography>

                    <SvgIcon
                        component={close}
                        onClick={() => {
                            setOpen(false)
                        }}
                    ></SvgIcon>
                </Box>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <SvgIcon
                        component={close}
                        onClick={() => {
                            setOpen(false)
                        }}
                    ></SvgIcon>
                </Box>
            )}
            {!clickStatus ? (
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={style}
                >
                    <Button1
                        TextColor="gammaWhite.main"
                        variant="caption1"
                        buttonVariant="contained"
                        buttonColor="alpha300"
                        styles={null}
                        onClick={handleClick}
                    >
                        {FILE_UPLOAD_TEXT}
                    </Button1>
                    <input
                        type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                    />
                </Grid>
            ) : (
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ marginTop: '40px' }}
                >
                    <Box component="img" src={success} />
                    <Typography
                        variant="h2"
                        color="betaHight.main"
                        sx={{ marginTop: '40px', marginBottom: '44px' }}
                    >
                        <strong>{HI_MESSAGE} </strong>
                        {SUCCESS_MESSAGE}
                    </Typography>
                    <Button1
                        variant="caption1"
                        buttonVariant="contained"
                        buttonColor="alpha400"
                        styles={{ width: '156px', height: '40px' }}
                        onClick={() => {
                            setOpen(false)
                        }}
                    >
                        <Typography variant="caption1" sx={{ fontWeight: 700 }}>
                            {OKAY}
                        </Typography>
                    </Button1>
                </Grid>
            )}
        </Box>
    )
}

export default FileUploadPopup
