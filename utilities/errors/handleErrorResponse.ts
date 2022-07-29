import { AxiosError } from 'axios'

export const handleErrorResponse = (err:any):Error => {
  const error = err as AxiosError<{message:string}>
  if (error.response) {
    throw new Error(error.response.data.message)
  }
  if (error.code === '404') throw new Error('Recurso no encontrado')
  throw new Error('No hubo respuesta del servidor')
}
