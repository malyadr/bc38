import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import DetailCard from '../DetailCard'
import { JobCard } from '../JobCard'
import SavedJobCard from '../SavedJobCard'
import SearchBar from '../SearchBar'
import Filter from '../Filter'
import DisplayChips from '../../molecules/DisplayChips'
import {
    BASED_ON_SEARCH,
    FIND_JOBS,
    JOBCARDPROPS,
    JOB_LIST,
    PROFILE_SKILL_SEARCH,
    RECOMMENDED,
} from '../../../constants/constants'
import theme from '../../../theme/customTheme'

interface FindJobsProps {
    data: JOBCARDPROPS[]
    // setData?: React.Dispatch<React.SetStateAction<JOBCARDPROPS[]>>
}

export const FindJobs = ({ data }: FindJobsProps) => {
    const [clickStatus, setStatus] = useState<number>(0)
    const [skills, setSkills] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [filterData, setFilterData] = useState<string[]>([])
    const [distance, setDistance] = useState<string[]>([])

    const cardData: JOBCARDPROPS[] = []

    for (const val of distance) {
        data &&
            data.map((d: JOBCARDPROPS) => {
                if (d.distance === val) {
                    cardData.push(d)
                }
            })
    }

    cardData.length != 0 && (data = cardData)

    let card: any

    data &&
        data.forEach((arrayItem: JOBCARDPROPS) => {
            if (clickStatus != 0 && arrayItem.id == clickStatus) {
                card = arrayItem
            } else {
                if (
                    (skills != '' || location !== '') &&
                    clickStatus == 0 &&
                    arrayItem.role
                        .toLowerCase()
                        .includes(skills.toLowerCase()) &&
                    arrayItem.jobLocation
                        .toLowerCase()
                        .includes(location.toLowerCase())
                ) {
                    card = arrayItem
                }
            }
        })

    return (
        <>
            <Box
                sx={{
                    height: 'fit-content',
                    backgroundColor: theme.palette.background.paper,
                    marginTop: '2vw',
                    paddingLeft: '40px',
                    paddingBottom: '140px',
                }}
            >
                <Box>
                    <Typography variant="h2" color="betaHigh.main">
                        {FIND_JOBS}
                    </Typography>
                    <Box
                        style={{
                            display: 'flex',
                            width: '100%',
                            marginTop: '8px',
                            marginBottom: '36px',
                        }}
                    >
                        <SearchBar
                            SetSkill={setSkills}
                            SetLocation={setLocation}
                            setStatus={setStatus}
                        />
                        <Filter
                            setData={setFilterData}
                            setDistance={setDistance}
                        />
                    </Box>
                    {clickStatus == 0 && skills == '' && location == '' ? (
                        <>
                            <Typography variant="h2" color="betaHigh.main">
                                {RECOMMENDED}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="betaMedium.main"
                                sx={{ marginTop: '4px', marginBottom: '20px' }}
                            >
                                {PROFILE_SKILL_SEARCH}
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant="h2" color="betaHigh.main">
                                {JOB_LIST}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="betaMedium.main"
                                sx={{ marginTop: '4px', marginBottom: '20px' }}
                            >
                                {BASED_ON_SEARCH}
                            </Typography>
                        </>
                    )}
                    {filterData && (
                        <DisplayChips
                            data={filterData}
                            setData={setFilterData}
                            setDistance={setDistance}
                            distance={distance}
                        />
                    )}
                </Box>
                {clickStatus == 0 && skills == '' && location == '' ? (
                    <>
                        <Box sx={{}}>
                            <Grid container spacing="30px">
                                {data &&
                                    data.map((d: JOBCARDPROPS) => (
                                        <Grid
                                            data-testid="card1"
                                            onClick={() => {
                                                setStatus(d.id)
                                            }}
                                            item
                                            key={d.id}
                                        >
                                            <JobCard
                                                src={d.image}
                                                role={d.role}
                                                companyName={d.company}
                                                location={d.jobLocation}
                                                time={d.time}
                                            ></JobCard>
                                        </Grid>
                                    ))}
                            </Grid>
                        </Box>
                    </>
                ) : (
                    <>
                        {card && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    marginRight: '5vw',
                                }}
                            >
                                <Box
                                    sx={{
                                        flexGrow: 2,
                                    }}
                                >
                                    <Grid
                                        container
                                        spacing={'16px'}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-around',
                                        }}
                                    >
                                        {data &&
                                            data
                                                .filter(
                                                    (d: JOBCARDPROPS) =>
                                                        d.role
                                                            .toLowerCase()
                                                            .includes(
                                                                skills.toLowerCase()
                                                            ) &&
                                                        d.jobLocation
                                                            .toLowerCase()
                                                            .includes(
                                                                location.toLowerCase()
                                                            )
                                                )
                                                .map((d: JOBCARDPROPS) => (
                                                    <Grid
                                                        onClick={() => {
                                                            setStatus(d.id)
                                                        }}
                                                        data-testid="card2"
                                                        item
                                                        key={d.id}
                                                        sx={{
                                                            flexGrow: 1,
                                                            width: '100%',
                                                        }}
                                                    >
                                                        <SavedJobCard
                                                            src={d.image}
                                                            role={d.role}
                                                            companyName={
                                                                d.company
                                                            }
                                                            location={
                                                                d.jobLocation
                                                            }
                                                            time={d.time}
                                                            isBordered={
                                                                d.id == card.id
                                                                    ? true
                                                                    : false
                                                            }
                                                        ></SavedJobCard>
                                                    </Grid>
                                                ))}
                                    </Grid>
                                </Box>
                                <Box>
                                    <DetailCard
                                        src={card.image}
                                        jobTitle={card.role}
                                        companyName={card.company}
                                        companyCity={card.jobLocation}
                                        time={card.time}
                                    />
                                </Box>
                            </Box>
                        )}
                    </>
                )}
            </Box>
        </>
    )
}
