import axios, { AxiosError, AxiosResponse } from 'axios'
import { API } from '../config'
import { Category, ResponseFlowers } from '../types/data'
import { FetcherAuth, FetcherWithBody, FetcherWithoutBody, ResponseLogin } from '../types/fetcher'
import { FormLoginType, FormRegisterType } from '../types/forms'
const kunanpa = axios.create({
  baseURL: API
})
export const register :FetcherWithBody<Omit<FormRegisterType, 'terms'| 'repeatPassword'>, {message:string}> = async (form) => {
  try {
    const { data } = await kunanpa.post('/signup', form) as AxiosResponse<{message:string}>
    return data
  } catch (err) {
    const error = err as AxiosError<{message:string}>
    if (error.response) throw new Error(error.response.data.message)
    throw new Error('No se obtuvo respuesta del servidor')
  }
}
export const getFlowers:FetcherWithoutBody<ResponseFlowers> = async () => {
  try {
    const { data } = await kunanpa.get('/flores') as AxiosResponse<ResponseFlowers>
    return data
  } catch (err) {
    const error = err as AxiosError<{message:string}>
    if (error.response) throw new Error(error.response.data.message)
    throw new Error('No se obtuvo respuesta del servidor')
  }
}
export const getCategories:FetcherWithoutBody<{data:Category[]}> = async () => {
  try {
    const { data } = await kunanpa.get('/categoria') as AxiosResponse<{data:Category[]}>
    return data
  } catch (err) {
    const error = err as AxiosError<{message:string}>
    if (error.response) throw new Error(error.response.data.message)
    throw new Error('No se obtuvo respuesta del servidor')
  }
}
export const getFlowersPage:FetcherWithBody<string, ResponseFlowers> = async (route) => {
  try {
    const { data } = await kunanpa.get(`/${route}`) as AxiosResponse<ResponseFlowers>
    return data
  } catch (err) {
    const error = err as AxiosError<{message:string}>
    if (error.response) throw new Error(error.response.data.message)
    throw new Error('No se obtuvo respuesta del servidor')
  }
}
export const login:FetcherWithBody<FormLoginType, ResponseLogin> = async (form) => {
  try {
    const { data } = await kunanpa.post('/login', form) as AxiosResponse<ResponseLogin>
    return data
  } catch (err) {
    const error = err as AxiosError<{message:string}>
    if (error.response) {
      throw new Error(error.response.data.message)
    }
    throw new Error('No se obtuvo respuesta del servidor')
  }
}
export const logout:FetcherAuth<{message:string}> = async (token) => {
  try {
    const { data } = await kunanpa.get('/logout', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<{message:string}>
    return data
  } catch (err) {
    console.log('catch error', err)
    const error = err as AxiosError<{message:string}>
    if (error.response) {
      throw new Error(error.response.data.message)
    }
    throw new Error('No hubo respuesta del servidor')
  }
}
