import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL, dummy, JOBCARDPROPS } from '../constants/constants'
import axios from 'axios'



interface PropsType {
    id: number;
    saved: boolean;
}


export const updateJobSavedStatus = createAsyncThunk(
    'job/updateSavedStatusById',
    async ({ id, saved }: PropsType) => {
       
        try {
            const {data} = await axios.patch(`${BASE_URL}/${id}`, {
                saved: !saved,
            })
            return data;
        } catch (err) {
            console.log(err)
        }
    }
)
export const getJobById = createAsyncThunk('job/fetchJobById', async (id:number) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${id}`)
        return data
    } catch (err) {
        console.log(err)
    }
})

interface StateProps {
    job: JOBCARDPROPS
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: StateProps = {
    job: dummy,
    loading: 'idle',
}

const jobSlice = createSlice({
    name: 'update',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addMatcher(
            (action) =>
                action.type.startsWith('job/fetchJobById') &&
                action.type.endsWith('/fulfilled'),
            (state, action) => {
                state.job = action.payload
                state.loading = 'succeeded'
            }
        )
        builder.addMatcher(
            (action) =>
                action.type.startsWith('job/fetchJobById') &&
                action.type.endsWith('/pending'),
            (state) => {
                state.loading = 'pending'
            }
        )
        builder.addMatcher(
            (action) =>
                action.type.startsWith('job/fetchJobById') &&
                action.type.endsWith('/rejected'),
            (state) => {
                state.loading = 'failed'
            }
        )
         builder.addMatcher(
             (action) =>
                 action.type.startsWith('job/updateSavedStatusById') &&
                 action.type.endsWith('/fulfilled'),
             (state, action) => {
                 state.job = action.payload
                 state.loading = 'succeeded'
             }
         )
         builder.addMatcher(
             (action) =>
                 action.type.startsWith('job/updateSavedStatusById') &&
                 action.type.endsWith('/pending'),
             (state) => {
                 state.loading = 'pending'
             }
         )
         builder.addMatcher(
             (action) =>
                 action.type.startsWith('job/updateSavedStatusById') &&
                 action.type.endsWith('/rejected'),
             (state) => {
                 state.loading = 'failed'
             }
         )
    },
})

export default jobSlice.reducer
