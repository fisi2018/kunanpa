import axios from 'axios'
import { API, API_V2_1 } from './env'

export const kunanpa = axios.create({
    baseURL: API
})
export const kunanpaV2 = axios.create({
    baseURL: API_V2_1
})
