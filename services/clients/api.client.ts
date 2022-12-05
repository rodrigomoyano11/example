import axios, { AxiosRequestConfig } from 'axios'

import { setTokenInterceptor } from '../interceptors/setToken.interceptor'

const config: AxiosRequestConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  baseURL: 'https://api.example.com',
}

const api = axios.create(config)

setTokenInterceptor(api)

export default api
