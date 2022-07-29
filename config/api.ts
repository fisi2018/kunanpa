import axios from 'axios'
import { API } from '.'

export const kunanpa = axios.create({
  baseURL: API
})
