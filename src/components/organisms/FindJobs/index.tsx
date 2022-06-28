import { Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import DetailCard from '../DetailCard'
import { JobCard } from '../JobCard'
import SavedJobCard from '../SavedJobCard'
import SearchBar from '../SearchBar'
import Filter from '../Filter'
import DisplayChips from '../../molecules/DisplayChips'
import {
    getAllFilteredJobs,
    getAllJobs,
    getAllJobsBySkillsAndLocation,
} from '../../../features/JobsSlice'
import {
    BASED_ON_SEARCH,
    FIND_JOBS,
    JOBCARDPROPS,
    JOB_LIST,
    PROFILE_SKILL_SEARCH,
    RECOMMENDED,
} from '../../../constants/constants'
import theme from '../../../theme/customTheme'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, StoreDispatch } from '../../../store/store'

export const FindJobs = () => {
    const [skills, setSkills] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [filterData, setFilterData] = useState<string[]>([])
    const [distance, setDistance] = useState<string[]>([])
    const [id, setId] = useState<number>(0)
    const [clearAll, setClearAll] = useState<boolean>(false)
    const { jobs } = useSelector((state: RootState) => state.jobsData)
    const dispatch = useDispatch<StoreDispatch>()
   

    useEffect(() => {
        dispatch(getAllJobs())
        if (jobs.length !== 0) {
            handleIdStatus(jobs[0].id)
        } else {
            handleIdStatus(0)
        }
       
    }, [])

    useEffect(() => {
        dispatch(
            getAllJobsBySkillsAndLocation({
                skills: skills,
                location: location,
            })
        )
    }, [skills, location])

    useEffect(() => {
        dispatch(getAllFilteredJobs(distance));
    }, [distance])

    const handleIdStatus = (uniqueId: number) => {
        setTimeout(() => {
            setId(uniqueId)
        }, 200)
    }

    return (
        <>
            <Box
                sx={{
                    height: 'fit-content',
                    backgroundColor: theme.palette.background.paper,
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
                            setStatus={setId}
                        />
                        <Filter
                            setData={setFilterData}
                            setDistance={setDistance}
                            ClearAll={clearAll}
                        />
                    </Box>
                    {id === 0 ? (
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
                            setClearAll={setClearAll}
                        />
                    )}
                </Box>
                {id === 0 ? (
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
                                {jobs &&
                                    jobs.map((j: JOBCARDPROPS) => (
                                        <Grid
                                            data-testid="card1"
                                            onClick={() => handleIdStatus(j.id)}
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
                                    {jobs &&
                                        jobs.map((d: JOBCARDPROPS) => (
                                            <Box
                                                onClick={() =>
                                                    handleIdStatus(d.id)
                                                }
                                                data-testid="card2"
                                                key={d.id}
                                                sx={{
                                                    width: '100%',
                                                }}
                                            >
                                                <SavedJobCard
                                                    src={d.image}
                                                    role={d.role}
                                                    companyName={d.company}
                                                    location={d.jobLocation}
                                                    time={d.time}
                                                    isBordered={
                                                        d.id == id
                                                            ? true
                                                            : false
                                                    }
                                                ></SavedJobCard>
                                            </Box>
                                        ))}
                                </Stack>
                                <Box>
                                    {jobs && id !== 0 && <DetailCard id={id} />}
                                </Box>
                            </Stack>
                        </Box>
                    </>
                )}
            </Box>
        </>
    )
}

export default FindJobs
