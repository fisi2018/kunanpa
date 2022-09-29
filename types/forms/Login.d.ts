import { loginSchema } from '@/utilities/validators'
import { InferType } from 'yup'

export type IFormLogin=InferType<typeof loginSchema>
