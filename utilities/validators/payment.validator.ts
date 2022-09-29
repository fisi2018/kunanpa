import { yupResolver } from '@hookform/resolvers/yup'
import { number, object, string } from 'yup'
export const paymentSchema = object({
  codigoPostal: number().integer().required('Campo requerido'),
  direccion: string().required('Campo requerido'),
  distrito: string().required('Campo requerido'),
  nombres: string().required('Campo requerido'),
  numTelefono: string().required('Campo requerido'),
  pais: string().required('Campo requerido'),
  nota: string().optional()
})
export const paymentResolver = yupResolver(paymentSchema)
