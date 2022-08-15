import { AxiosResponse } from 'axios'
import { kunanpa } from '../../config'
import { FetcherWithBody } from '../../types/fetcher'
import { FormRegisterType } from '../../types/forms'
import { handleErrorResponse } from '../../utilities/handleErrors'

export const register :FetcherWithBody<Omit<FormRegisterType, 'terms'| 'repeatPassword'>, {message:string}> = async (form) => {
  try {
    const { data } = await kunanpa.post('/signup', form) as AxiosResponse<{message:string}>
    return data
  } catch (err) {
    console.log(err)
    throw handleErrorResponse(err)
  }
}
