import { REGEX_FORM } from '@/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

export const updateUserSchema = object({
    name: string().required('Campo requerido'),
    dni: string()
        .matches(REGEX_FORM.REGEX_DNI, 'DNI inválido')
        .required('Campo requerido'),
    address: string().required('Campo requerido')
})
export const updateUserResolver = yupResolver(updateUserSchema)
