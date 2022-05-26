import { Grid } from '@mui/material'
import React from 'react'
import { Button1 } from '../button'

const style = {
    m: 2,
    border: '2px dashed',
    width: '692px',
    bgcolor: 'gammaAccent3.main',
    borderColor: 'alpha400.main',
}

const FileUploader = () => {
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
                    Click Here to Upload Files
                </Button1>
            </Grid>
        </>
    )
}

export default FileUploader
