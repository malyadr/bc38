import api from '../../../api'
import { JOBCARDPROPS, SKILL_DETAILS } from '../../constants/constants'

export const getAllSkills = async () => {
    const { data } = await api.get('/skills')
    return data
}

export const getNoOfJobsHasSkills = async (
    skills: string[],
    jobLocations: string[]
) => {
    const { data } = await api.get('/jobs')
    return data.filter((job: JOBCARDPROPS) => {
        let a = false
        skills.forEach((skill) => {
            if (!a) {
                if (skill.includes(job.role)) {
                    a = true
                }
            }
        })
        let b = false
        jobLocations.forEach((locations) => {
            if (locations.includes(job.locationId.locationName)) {
                b = true
            }
        })
        return a && b
    }).length
}
