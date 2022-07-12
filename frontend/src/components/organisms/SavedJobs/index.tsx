import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import DetailCard from '../DetailCard'
import SavedJobCard from '../SavedJobCard'
import { JOBCARDPROPS } from '../../../constants/constants'
import theme from '../../../theme/customTheme'
import { RootState, StoreDispatch } from '../../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSavedJobs } from '../../../features/JobsSlice'

export const SavedJobs = () => {
    const [id, setId] = useState<number>(0)

    const dispatch = useDispatch<StoreDispatch>()
    const { jobs } = useSelector((states: RootState) => states.jobsData)
    const [state, setState] = useState<number>(0)
    useEffect(() => {
        dispatch(getAllSavedJobs())
    }, [state])

    useEffect(() => {
        const handleId = async () => {
            if (jobs.length !== 0) {
                await setId(jobs[0].id)
            } else {
                await setId(0)
            }
        }
        handleId()
    }, [jobs])

    const handleIdStatus = (uniqueId: number) => {
        setId(uniqueId)
    }

    const handleState = () => {
        setTimeout(() => {
            setState(state + 1)
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
                        Saved Jobs
                    </Typography>
                    <>
                        {jobs && (
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
                                                        id={d.id}
                                                        src={d.image}
                                                        role={d.role}
                                                        companyName={
                                                            d.companyName
                                                        }
                                                        location={
                                                            d.locationId
                                                                .locationName
                                                        }
                                                        time={d.time}
                                                        isBordered={
                                                            d.id === id
                                                                ? true
                                                                : false
                                                        }
                                                    ></SavedJobCard>
                                                </Box>
                                            ))}
                                    </Stack>
                                    <Box>
                                        {jobs.length !== 0 && id !== 0 && (
                                            <DetailCard
                                                id={id}
                                                setState={handleState}
                                            />
                                        )}
                                    </Box>
                                </Stack>
                            </Box>
                        )}
                    </>
                </Box>
            </Box>
        </>
    )
}

export default SavedJobs
