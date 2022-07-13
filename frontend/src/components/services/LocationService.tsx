import api from '../../../api'


export const getAllLocations = async () => {
    const {data} = await api.get('/locations')
    return data
}

export const getAqiByLocationName = async (location: string) => {
    const { data } = await api.get(`/locations/aqi-by-name/${location}`)
    return data;
}

interface Props {
    id: number;
    locationName: string;
    aqi: number;
}
export const getAqiByJobLocations = async (locations: string[]) => {
    const { data } = await api.get('/locations');
    return data.filter((job: Props) => locations.includes(job.locationName)).map((job: Props) => { 
        return { name: job.locationName, aqi: job.aqi }
     })

}