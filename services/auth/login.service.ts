import { kunanpa } from '@/config'
import { FetcherWithBody, ResponseLogin } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { IFormLogin } from '@/views/login/types/forms'

export const login:FetcherWithBody<IFormLogin, ResponseLogin> = async (form) => {
  try {
    const { data } = await kunanpa.post<ResponseLogin>('/login', form)
    return data
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
