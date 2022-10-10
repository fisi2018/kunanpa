import { kunanpa } from '@/config'
import { FetcherAuthWithBody } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { PaymentRequest } from '../types/requests'
import { PaymentResponse } from '../types/responses'

export const makePayment:FetcherAuthWithBody<PaymentRequest, PaymentResponse> = async (form, token) => {
  try {
    const { data } = await kunanpa.post<PaymentResponse>('/shopping', form, { headers: { Authorization: `Bearer ${token}` } })
    return data
  } catch (e) {
    throw handleErrorResponse(e)
  }
}
