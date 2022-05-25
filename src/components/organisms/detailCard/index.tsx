import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Grid, Box } from '@mui/material'
import Popup from '../../molecules/popup'
import FileUploader from '../../molecules/fileUploader'
import Divider from '@mui/material/Divider'
import Logo from '../../../assets/images/image 16.jpg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button1 } from '../../molecules/button'

interface Props {
    jobTitle: string
    companyName: string
    companyCity: string
}

const DetailCard = ({ jobTitle, companyName, companyCity }: Props) => {
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
                }}
            >
                <CardContent
                    sx={{
                        marginLeft: '26px',
                        marginRight: '24px',
                        padding: 0,
                        marginTop: '24px',
                    }}
                >
                    <Grid container>
                        <Grid item sx={{ marginRight: '20px' }}>
                            <Box component="img" src={Logo} />
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
                                        36 min ago
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
                                                    onClick={undefined}
                                                >
                                                    Save
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
                        <Grid item>
                            <MoreHorizIcon />
                        </Grid>
                    </Grid>
                    <Divider
                        variant="middle"
                        sx={{ marginTop: '24px', marginBottom: '24px' }}
                    />
                    <Grid container>
                        <Grid item sx={{ marginBottom: '8px' }}>
                            <Typography variant="body1" color="betaHigh.main">
                                Description
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="betaMedium.main">
                                Open Text is seeking a talented, personable
                                interaction designer who can assist the User
                                Experience Design team by working with other
                                designers and development teams on a variety of
                                projects. The OpenText User Experience Design
                                group is a distributed multi-disciplinary team
                                of professionals that are responsible for
                                enhancing the UX of the company’s collective
                                product suites worldwide.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            sx={{ marginTop: '24px', marginBottom: '8px' }}
                        >
                            <Typography variant="body1" color="betaHigh.main">
                                About the Company
                            </Typography>
                        </Grid>
                        <Grid item sx={{ marginBottom: '8px' }}>
                            <Typography variant="body2" color="betaMedium.main">
                                High level of proficiency with leading UX Design
                                software packages, such as Axure, Sketch,
                                InVision, or Experience Design including the
                                core Adobe Creative Suite products.
                            </Typography>
                        </Grid>
                        <Grid item sx={{ marginBottom: '8px' }}>
                            <Typography variant="body2" color="betaMedium.main">
                                Excellent written and oral communication and
                                presentation skills
                                <Button1
                                    TextColor="alpha400.main"
                                    variant="body1"
                                    buttonVariant="text"
                                    buttonColor="alpha400"
                                    styles={null}
                                    onClick={undefined}
                                >
                                    SEE MORE
                                </Button1>
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card
                variant="outlined"
                sx={{
                    width: '404px',
                    height: '64px',
                    borderRadius: '12px',
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
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
                            onClick={undefined}
                        >
                            <Grid container>
                                <Grid item sx={{ marginRight: 1 }}>
                                    Green Commute Routes
                                </Grid>
                                <Grid item>
                                    <ArrowForwardIcon />
                                </Grid>
                            </Grid>
                        </Button1>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default DetailCard
