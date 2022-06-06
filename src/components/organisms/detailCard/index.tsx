import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Grid, Box } from '@mui/material'
import Popup from '../../molecules/popup'
import FileUploader from '../../molecules/fileUploader'
import Divider from '@mui/material/Divider'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button1 } from '../../molecules/button'
import { Routes } from '../JobRoutes'
import {
    SAVE,
    DESCRIPTION,
    JOB_DETAIL,
    ABOUT_TITLE,
    ABOUT_COMPANY,
    SKILL_DETAILS,
    SEE_MORE,
    GREEN_COMMUTE_ROUTE,
} from '../../../constants/constants'
import { imageTypes } from '../../../theme/customTheme'
import Img from '../../atoms/image'

interface Props {
    src: imageTypes;
    jobTitle: string
    companyName: string
    companyCity: string
    time: string
}

const DetailCard = ({
    src,
    jobTitle,
    companyName,
    companyCity,
    time,
}: Props) => {
    const [commuteClickStatus, setCommuteClickStatus] = useState<boolean>(false)
    const [saveClickStatus, setSaveClickStatus] = useState<boolean>(false)
    const handleSaved = () => {
        setSaveClickStatus(!saveClickStatus)
    }
    const goBack = () => {
        setCommuteClickStatus(false)
    }
    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    width: '404px',
                    height: '670px',
                    borderRadius: '12px',
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    bgcolor: 'gammaWhite.main',
                    display:'flex',
                }}
            >
                <CardContent
                    sx={{
                        marginLeft: '26px',
                        marginRight: '24px',
                        padding: 0,
                        marginTop: '24px',
                        width:'361px'
                    }}
                >
                    <Grid container>
                        <Grid item sx={{ marginRight: '20px' }}>
                            <Img src={src} />
                        </Grid>
                        <Grid item sx={{ width: '212px', marginRight: '20px' }}>
                            <Grid>
                                <Grid item>
                                    <Typography
                                        variant="subtitle1"
                                        color="betaHigh.main"
                                    >
                                        {jobTitle}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="caption2"
                                        color="betaMedium.main"
                                    >
                                        {companyName}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="caption2"
                                        color="betaMedium.main"
                                    >
                                        {companyCity}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="caption1"
                                        color="betaMedium.main"
                                    >
                                        {time}
                                    </Typography>
                                    <Grid
                                        item
                                        sx={{ marginTop: '24px' }}
                                        justifyContent="center"
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <Button1
                                                    TextColor="alpha300.main"
                                                    variant="caption1"
                                                    buttonVariant="outlined"
                                                    buttonColor="alpha300"
                                                    styles={{
                                                        borderRadius: '8px',
                                                    }}
                                                    onClick={handleSaved}
                                                >
                                                    {saveClickStatus
                                                        ? 'unsave'
                                                        : SAVE}
                                                    {/* {SAVE} */}
                                                </Button1>
                                            </Grid>
                                            <Grid item>
                                                <Popup>
                                                    <FileUploader />
                                                </Popup>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{position:'relative', left:'20px'}}>
                            <MoreHorizIcon />
                        </Grid>
                    </Grid>
                    <Divider
                        variant="middle"
                        sx={{ marginTop: '24px', marginBottom: '24px' }}
                    />
                    {commuteClickStatus == false ? (
                        <Grid container>
                            <Grid item sx={{ marginBottom: '8px' }}>
                                <Typography
                                    variant="body1"
                                    color="betaHigh.main"
                                >
                                    {DESCRIPTION}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body2"
                                    color="betaMedium.main"
                                >
                                    {JOB_DETAIL}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                sx={{ marginTop: '24px', marginBottom: '8px' }}
                            >
                                <Typography
                                    variant="body1"
                                    color="betaHigh.main"
                                >
                                    {ABOUT_TITLE}
                                </Typography>
                            </Grid>
                            <Grid item sx={{ marginBottom: '8px' }}>
                                <Typography
                                    variant="body2"
                                    color="betaMedium.main"
                                >
                                    {ABOUT_COMPANY}
                                </Typography>
                            </Grid>
                            <Grid item sx={{ marginBottom: '8px' }}>
                                <Typography
                                    variant="body2"
                                    color="betaMedium.main"
                                >
                                    {SKILL_DETAILS}
                                    <Button1
                                        TextColor="alpha400.main"
                                        variant="body1"
                                        buttonVariant="text"
                                        buttonColor="alpha400"
                                        styles={null}
                                        onClick={undefined}
                                    >
                                        {SEE_MORE}
                                    </Button1>
                                </Typography>
                            </Grid>
                        </Grid>
                    ) : (
                        <Routes onClick={goBack}></Routes>
                    )}
                </CardContent>
            </Card>
            {commuteClickStatus == false && (
                <Card
                    variant="outlined"
                    sx={{
                        width: '404px',
                        height: '64px',
                        borderRadius: '12px',
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        bgcolor:'gammaWhite.main'
                    }}
                >
                    <CardContent>
                        <Grid container justifyContent="center">
                            <Button1
                                TextColor="alpha400.main"
                                variant="subtitle1"
                                buttonVariant="text"
                                buttonColor="gammaWhite"
                                styles={null}
                                onClick={() => {
                                    setCommuteClickStatus(true)
                                }}
                            >
                                <Grid container >
                                    <Grid item sx={{ marginRight: 1 }}>
                                        {GREEN_COMMUTE_ROUTE}
                                    </Grid>
                                    <Grid item>
                                        <ArrowForwardIcon />
                                    </Grid>
                                </Grid>
                            </Button1>
                        </Grid>
                    </CardContent>
                </Card>
            )}
        </>
    )
}

export default DetailCard
