import { Grid } from '@mui/material'
import React from 'react'
import { Button1 } from '../button'
import { FILE_UPLOAD_TEXT } from '../../../constants/constants'

const style = {
    m: 2,
    border: '2px dashed',
    width: '692px',
    bgcolor: 'gammaAccent3.main',
    borderColor: 'alpha400.main',
}

const FileUploadPopup = () => {
    return (
        <>
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
                    onClick={undefined}
                >
                    {FILE_UPLOAD_TEXT}
                </Button1>
            </Grid>
        </>
    )
}

export default FileUploadPopup