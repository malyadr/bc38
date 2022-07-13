import { RouteProps } from '../../constants/constants'
import api from '../../../api'

export let savedJobs: RouteProps

export const getRoutes = async (id: number) => {
    const isMounted = true
    const response = await api.get(`/routes/${id}`)

    return response.data
}
