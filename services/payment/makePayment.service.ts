import { kunanpa } from '@/config'
import { FetcherAuthWithBody } from '@/types/fetcher'
import { PaymentBody } from '@/types/forms'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { AxiosResponse } from 'axios'

export const makePayment:FetcherAuthWithBody<PaymentBody & {idCliente:number}, {message:string}> = async (form, token) => {
  try {
    const { data } = await kunanpa.post('/shopping', form, { headers: { Authorization: `Bearer ${token}` } }) as AxiosResponse<{message:string}>
    return data
  } catch (e) {
    throw handleErrorResponse(e)
  }
}
