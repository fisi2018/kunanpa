import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
export const loginSchema = object({
  email: string().email('Email inválido').required('Campo requerido'),
  password: string().min(8, 'La contraseña debe tener como mínimo 8 caracteres').max(16, 'La contraseña debe tener como máximo 16 caracteres').required('Campo requerido')
})
export const loginResolver = yupResolver(loginSchema)
