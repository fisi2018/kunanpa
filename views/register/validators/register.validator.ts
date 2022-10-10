import { REGEX_FORM } from '@/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { boolean, object, ref, string } from 'yup'

export const registerSchema = object({
  email: string().email('Email inválido').required('Campo requerido'),
  password: string().min(8, 'La contraseña debe tener 8 carcateres como mínimo').max(16, 'La contraseña debe tener como máximo 16 caracteres').required('Campo requerido'),
  dni: string().matches(REGEX_FORM.REGEX_DNI, 'DNI Inválido').optional(),
  nombre: string().required('Campo requerido'),
  terms: boolean().isTrue().required('Debes aceptar los términos y condiciones'),
  repeatPassword: string().oneOf([ref('password')], 'Las contraseñas deben coincidir').required('Campo requerido'),
  direccion: string().optional()
})

export const registerResolver = yupResolver(registerSchema)
