import { Grid, Stack, Typography } from '@mui/material'
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
    setState: React.Dispatch<React.SetStateAction<boolean>>
    clickStatus: number
    setStatus: React.Dispatch<React.SetStateAction<number>>
}

export const FindJobs = ({
    data,
    setState,
    setStatus,
    clickStatus,
}: FindJobsProps) => {
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
                    // paddingLeft: '40px',
                    paddingBottom: '140px',
                    paddingRight: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                }}
            >
                <Box>
                    <Typography variant="h2" color="betaHigh.main">
                        {FIND_JOBS}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            width: 'fit-content',
                            marginTop: '8px',
                            marginBottom: '36px',
                            justifyContent: 'space-between',
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
                        <Box>
                            <Stack
                                direction="row"
                                sx={{
                                    flexWrap: 'wrap',
                                    gap: '10px',
                                    width: '100%',
                                }}
                            >
                                {data &&
                                    data.map((j: JOBCARDPROPS) => (
                                        <Grid
                                            data-testid="card1"
                                            onClick={() => {
                                                setStatus(j.id)
                                            }}
                                            item
                                            key={j.id}
                                            sx={{
                                                height: '100%',
                                            }}
                                        >
                                            <JobCard
                                                src={j.image}
                                                role={j.role}
                                                companyName={j.company}
                                                location={j.jobLocation}
                                                time={j.time}
                                            ></JobCard>
                                        </Grid>
                                    ))}
                            </Stack>
                        </Box>
                    </>
                ) : (
                    <>
                        {card && (
                            <Box>
                                <Stack
                                    direction="row"
                                    sx={{
                                        flexWrap: 'wrap',
                                        gap: '16px',
                                    }}
                                >
                                    <Stack
                                        direction="column"
                                        sx={{
                                            gap: '10px',
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
                                                    <Box
                                                        onClick={() => {
                                                            setStatus(d.id)
                                                        }}
                                                        data-testid="card2"
                                                        key={d.id}
                                                        sx={{
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
                                                    </Box>
                                                ))}
                                    </Stack>
                                    <Box>
                                        <DetailCard
                                            id={card.id}
                                            src={card.image}
                                            jobTitle={card.role}
                                            companyName={card.company}
                                            companyCity={card.jobLocation}
                                            time={card.time}
                                            saved={card.saved}
                                            setState={setState}
                                            applied={card.applied}
                                        />
                                    </Box>
                                </Stack>
                            </Box>
                        )}
                    </>
                )}
            </Box>
        </>
    )
}
