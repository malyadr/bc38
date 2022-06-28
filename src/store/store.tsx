import { configureStore } from '@reduxjs/toolkit'
import jobsSlice from '../features/JobsSlice'
import jobSlice from '../features/JobSlice'

export const store =  configureStore({
    reducer: {
        jobsData: jobsSlice,
        jobData: jobSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;
export type StoreDispatch = typeof store.dispatch;
