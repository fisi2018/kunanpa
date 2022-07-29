import { kunanpa } from '@/config'
import { FetcherWithBody, ResponseLogin } from '@/types/fetcher'
import { FormLoginType } from '@/types/forms'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { AxiosResponse } from 'axios'

export const login:FetcherWithBody<FormLoginType, ResponseLogin> = async (form) => {
  try {
    const { data } = await kunanpa.post('/login', form) as AxiosResponse<ResponseLogin>
    return data
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
