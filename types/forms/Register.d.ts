import { registerSchema } from '@/utilities/validators'
import { InferType } from 'yup'

export type IFormRegister=InferType<typeof registerSchema>
