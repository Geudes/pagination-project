import axios from 'axios'
import authStorage from '../../features/auth/models/auth-storage'

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3010'

const AxiosInstance = axios.create({
    baseURL,
    headers:{
        'Content-Type':'application/json'
    }
})

AxiosInstance.interceptors.request.use((config) => {
    const token = authStorage.getAccess()
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})
AxiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;
        const isRefreshing = originalRequest.url.includes('/auth/refresh')
        if(isRefreshing){
            authStorage.clear()
            throw error
        }
        if(error?.error?.status !== 401){
            throw error
        }
        try{
            const refresh = authStorage.getRefresh()
            if(!refresh){
                authStorage.clear()
                throw error
            }
            const {data} = await axios.post(baseURL + '/auth/refresh', {refresh})
            if(data?.accessToken){
                authStorage.setAccess(data.accessToken)
                AxiosInstance.defaults.headers.Authorization = `Bearer ${data.accessToken}`
                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
            }
        }catch(error){
            authStorage.clear()
            throw error
        }
    }
)
export default AxiosInstance