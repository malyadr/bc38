import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Grid, Stack } from '@mui/material'
import Popup from '../../molecules/Popup'
import Divider from '@mui/material/Divider'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button1 } from '../../molecules/Button'
import { Routes } from '../JobRoutes'
import { getRoutes } from '../../services/routesService'
import {
    SAVE,
    DESCRIPTION,
    JOB_DETAIL,
    ABOUT_TITLE,
    ABOUT_COMPANY,
    SKILL_DETAILS,
    SEE_MORE,
    GREEN_COMMUTE_ROUTE,
    JOBCARDPROPS,
    dummy,
} from '../../../constants/constants'
import Img from '../../atoms/Image'
import { GetJobById } from '../../services/FindJobsService'

interface DetailCardProps {
    id: number
    setState?: () => void
}

const DetailCard = ({ id }: DetailCardProps) => {
    const [values, setValues] = useState<boolean[]>([])

    useEffect(() => {
        const val: boolean[] = []
        getRoutes(id).then((res) => {
            val.push(res.bike, res.bus, res.cab, res.metro)
            setValues(val)
        })
    }, [id])

    const [job, setJob] = useState<JOBCARDPROPS>(dummy)
    const [commuteClickStatus, setCommuteClickStatus] = useState<boolean>(false)

    const goBack = () => {
        setCommuteClickStatus(false)
    }
    useEffect(() => {
        const jobPromise = GetJobById(id)
        jobPromise.then((result) => {
            setJob(result)
        })
    }, [id])

    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    width: '450px',
                    borderRadius: '12px',
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    bgcolor: 'gammaWhite.main',
                    display: 'flex',
                }}
            >
                <CardContent
                    sx={{
                        marginLeft: '1.9vw',
                        marginRight: '1.9vw',
                        padding: 0,
                        marginTop: '2vh',
                        width: '450px',
                    }}
                >
                    <Stack direction="row" sx={{ width: '404px' }}>
                        <Grid item sx={{ marginRight: '20px' }}>
                            <Img src={job.image} />
                        </Grid>
                        <Grid item sx={{ width: '404px', marginRight: '20px' }}>
                            <Grid>
                                <Grid item>
                                    <Typography
                                        variant="subtitle1"
                                        color="betaHigh.main"
                                    >
                                        {job.role}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="caption2"
                                        color="betaMedium.main"
                                    >
                                        {job.companyName}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="caption2"
                                        color="betaMedium.main"
                                    >
                                        {job.locationId.locationName}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="caption1"
                                        color="betaMedium.main"
                                    >
                                        {job.time}
                                    </Typography>
                                    <Grid
                                        item
                                        sx={{ marginTop: '2vh' }}
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
                                                        width: '99px',
                                                        height: '32px',
                                                    }}
                                                >
                                                    {SAVE}
                                                </Button1>
                                            </Grid>
                                            <Grid item>
                                                <Popup
                                                    setApplied={() => 'jobs'}
                                                    applied={false}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ position: 'relative', right: '5px' }}>
                            <MoreHorizIcon />
                        </Grid>
                    </Stack>
                    <Divider
                        variant="middle"
                        sx={{ marginTop: '2vh', marginBottom: '2vh' }}
                    />
                    {!commuteClickStatus ? (
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
                                sx={{ marginTop: '2vh', marginBottom: '8px' }}
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
                        <Routes onClick={goBack} values={values}></Routes>
                    )}
                </CardContent>
            </Card>
            {!commuteClickStatus && (
                <Card
                    variant="outlined"
                    sx={{
                        width: '450px',
                        height: 'fit-content',
                        borderRadius: '12px',
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        bgcolor: 'gammaWhite.main',
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
                                <Grid container>
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
