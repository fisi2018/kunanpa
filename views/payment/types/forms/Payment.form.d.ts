import { InferType } from 'yup'
import { paymentSchema } from '../../validators'

export type IFormPayment=InferType<typeof paymentSchema>
