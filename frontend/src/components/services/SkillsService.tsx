import api from '../../../api'
import { JOBCARDPROPS} from '../../constants/constants';

export const getAllSkills = async () => {
    const { data } = await api.get('/skills');
    return data;
}


export const getNoOfJobsHasSkills = async (skill: string[]) => {
    const { data } = await api.get('/jobs');
    const response = data.filter((job: JOBCARDPROPS) => skill.includes(job.role));
    return response.length;
}