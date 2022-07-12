import api from '../../../api'
import { JOBCARDPROPS } from '../../constants/constants'

export let jobList: JOBCARDPROPS[]

export const GetAllJobCards = async () => {
    const response = await api.get('jobs/')
    jobList = response.data
    return response.data
}

export const GetJobById = async (id: number) => {
    const result = await api.get(`jobs/${id}`)
    return result.data
}

interface SearchProps {
    skills: string
    location: string
}

export const getAllJobsBySkillsAndLocation = async ({
    skills,
    location,
}: SearchProps) => {
    try {
        const data = jobList
        const response: JOBCARDPROPS[] = []

        data &&
            data.forEach((job: JOBCARDPROPS) => {
                if (
                    (skills != '' || location !== '') &&
                    job.role.toLowerCase().includes(skills.toLowerCase()) &&
                    job.locationId.locationName
                        .toLowerCase()
                        .includes(location.toLowerCase())
                )
                    response.push(job)
            })
        return response
    } catch (err) {
        console.log(err)
    }
}

export const getAllFilteredJobs = (filterData: any) => {
    const data = jobList
    if (filterData.length === 0) return data
    const result = data.filter((job: JOBCARDPROPS) =>
        filterData.includes(job.distance)
    )
    return result
}
