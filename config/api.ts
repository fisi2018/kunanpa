import axios from 'axios'
import { API } from './env'

export const kunanpa = axios.create({
    baseURL: API
})
export const kunanpaV2 = axios.create({
    baseURL: API
})
