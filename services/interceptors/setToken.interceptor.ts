import { AxiosInstance } from 'axios'

export const setTokenInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use((request) => {
    const token = localStorage.getItem('token')

    if (token) {
      // request.headers.Authorization = `Bearer ${token}`
    }

    return request
  })
}
