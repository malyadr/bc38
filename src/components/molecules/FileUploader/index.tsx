import { Box, Grid, SvgIcon, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button1 } from '../Button'
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
interface FileUploadProps {
    open?: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setApplied: React.Dispatch<React.SetStateAction<boolean>>
}
const FileUploadPopup = ({ open, setOpen, setApplied }: FileUploadProps) => {
    open && setOpen(open)
    const [clickStatus, setStatus] = useState<boolean>(false)

    const hiddenFileInput = React.useRef<HTMLInputElement>(null)
    const handleClick = () => {
        hiddenFileInput.current && hiddenFileInput.current.click()
    }

    const handleChange = (event: any) => {
        setStatus(true)
        
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
                        data-testid="close"
                    ></SvgIcon>
                </Box>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <SvgIcon
                        component={close}
                        onClick={() => {
                            setOpen(false)
                        }}
                        data-testid="close1"
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
                        data-testid="fileuploadbutton"
                    >
                        {FILE_UPLOAD_TEXT}
                    </Button1>
                    <input
                        type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        data-testid="input"
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
                            setApplied((prev) => {
                                
                                return prev ? prev : true
                            })
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
