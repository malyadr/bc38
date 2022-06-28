import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL, JOBCARDPROPS } from '../constants/constants'
import axios from "axios";


export const getAllJobs = createAsyncThunk('jobs/fetchAllJobs', async () => {
    console.log('entered functions');
    try {
        const { data } = await axios.get(`${BASE_URL}`)
        console.log('data = ', data);
        return data;
    } catch (err) {
        console.log(err);
     }
})

interface SearchProps {
    skills: string;
    location: string;
}

export const getAllJobsBySkillsAndLocation = createAsyncThunk('jobs/fetchAlljobsBySkillsAndLocation', async ({skills, location}: SearchProps) => {
    
    try {
        const { data } = await axios.get(`${BASE_URL}`)
        let response = data;
        if (location !== '' && location !== null && location !== undefined)
            response = data.filter((job: JOBCARDPROPS) => job.jobLocation.toLowerCase().includes(location.toLowerCase()))
        if (skills !== '' && skills !== null && skills !== undefined) 
            response = data.filter((job: JOBCARDPROPS) =>
                job.role.toLowerCase().includes(skills.toLowerCase())
            )
        return response;
    } catch (err) {
        console.log(err)
    }
})

export const getAllSavedJobs = createAsyncThunk(
    'jobs/fetchAllSavedJobs',
    async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}`)
            return data.filter((job: JOBCARDPROPS) => job.saved)
        } catch (err) {
            console.log(err)
        }
    }
)

export const getAllFilteredJobs = createAsyncThunk('jobs/fetchFilteredJobs', async (filterData: string[]) => {
    try {
        const { data } = await axios.get(`${BASE_URL}`)
        if (filterData.length === 0) return data;
        return data.filter((job:JOBCARDPROPS) => filterData.includes(job.distance))
    } catch (err) {
        console.log(err)
    }
})




interface StateProps {
    jobs: JOBCARDPROPS[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: StateProps = {
    jobs: [],
    loading: 'idle'
}

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher((action) => action.type.startsWith('jobs/fetchAllJobs') && action.type.endsWith('/fulfilled'), (state, action) => {
            state.jobs = action.payload;
            state.loading = 'succeeded'
        })
        builder.addMatcher(
            (action) =>
                action.type.startsWith('jobs/fetchAllJobs') &&
                action.type.endsWith('/pending'),
            (state) => {
                state.loading = 'pending'
            }
        )
        builder.addMatcher(
            (action) =>
                action.type.startsWith('jobs/fetchAllJobs') &&
                action.type.endsWith('/rejected'),
            (state) => {
                state.loading = 'failed'
            }
        )
         builder.addMatcher(
             (action) =>
                 action.type.startsWith('jobs/fetchAlljobsBySkillsAndLocation') &&
                 action.type.endsWith('/fulfilled'),
             (state, action) => {
                 state.jobs = action.payload
                 state.loading = 'succeeded'
             }
         )
         builder.addMatcher(
             (action) =>
                 action.type.startsWith('jobs/fetchAlljobsBySkillsAndLocation') &&
                 action.type.endsWith('/pending'),
             (state) => {
                 state.loading = 'pending'
             }
         )
         builder.addMatcher(
             (action) =>
                 action.type.startsWith('jobs/fetchAlljobsBySkillsAndLocation') &&
                 action.type.endsWith('/rejected'),
             (state) => {
                 state.loading = 'failed'
             }
         )
         builder.addMatcher(
             (action) =>
                 action.type.startsWith('jobs/fetchFilteredJobs') &&
                 action.type.endsWith('/fulfilled'),
             (state, action) => {
                 state.jobs = action.payload
                 state.loading = 'succeeded'
             }
         )
         builder.addMatcher(
             (action) =>
                 action.type.startsWith('jobs/fetchFilteredJobs') &&
                 action.type.endsWith('/pending'),
             (state) => {
                 state.loading = 'pending'
             }
         )
         builder.addMatcher(
             (action) =>
                 action.type.startsWith('jobs/fetchFilteredJobs') &&
                 action.type.endsWith('/rejected'),
             (state) => {
                 state.loading = 'failed'
             }
         )
        builder.addMatcher(
            (action) =>
                action.type.startsWith('jobs/fetchAllSavedJobs') &&
                action.type.endsWith('/fulfilled'),
            (state, action) => {
                state.jobs = action.payload
                state.loading = 'succeeded'
            }
        )
        builder.addMatcher(
            (action) =>
                action.type.startsWith('jobs/fetchAllSavedJobs') &&
                action.type.endsWith('/pending'),
            (state) => {
                state.loading = 'pending'
            }
        )
        builder.addMatcher(
            (action) =>
                action.type.startsWith('jobs/fetchAllSavedJobs') &&
                action.type.endsWith('/rejected'),
            (state) => {
                state.loading = 'failed'
            }
        )
    }
})

export default jobsSlice.reducer;