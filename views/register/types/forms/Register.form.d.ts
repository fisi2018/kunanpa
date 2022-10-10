import { InferType } from 'yup'
import { registerSchema } from '../../validators'

export type IFormRegister=InferType<typeof registerSchema>
