import api from '../../../api'
import { JOBCARDPROPS } from '../../constants/constants'

export let jobList: JOBCARDPROPS[]




export const getJobSavedStatusById = async (id: number) => {
    const {data} = await api.get(`savedJobs/status/${id}`)
    return data
}

interface SavedJobsProps {
    id: number;
    jobId: JOBCARDPROPS;
    saved: number;
}

export const getAllSavedJobs = async () => {
    const { data } = await api.get("/savedJobs");
    return data.filter((job: SavedJobsProps) => job.saved === 1).map((job: SavedJobsProps) => job.jobId);
}


export const updateJobSavedStatus = async (id: number) => {
    await api.put(`/savedJobs/update-status/${id}`)
    return getJobSavedStatusById(id);
}