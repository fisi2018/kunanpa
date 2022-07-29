import axios from 'axios'
import { API } from './env'

export const kunanpa = axios.create({
  baseURL: API
})
