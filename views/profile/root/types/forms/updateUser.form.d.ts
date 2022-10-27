import { InferType } from 'yup'
import { updateUserSchema } from '../../validators'

export type UpdateUserForm = InferType<typeof updateUserSchema>
