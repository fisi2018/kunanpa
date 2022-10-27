import { REGEX_FORM } from '@/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

export const updateUserSchema = object({
    name: string().required('El nombre es requerido'),
    dni: string()
        .matches(REGEX_FORM.REGEX_DNI, 'El DNI es inválido')
        .required('El dni es requerido'),
    address: string().required('La dirección es requerida')
})
export const updateUserResolver = yupResolver(updateUserSchema)
