import { OrderPayment } from '../types/models'
import { PaymentResponse } from '../types/responses'

export const createPaymentAdapter = (response:PaymentResponse):OrderPayment => {
  return {
    message: response.message,
    preferenceId: response['key-client-side']['preference-id'],
    publicKey: response['key-client-side']['public-key'],
    redirect_url: response['MP-link']
  }
}
