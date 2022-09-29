import { IFormRegister } from '@/types/forms'
import { AxiosResponse } from 'axios'
import { kunanpa } from '../../config'
import { FetcherWithBody } from '../../types/fetcher'
import { handleErrorResponse } from '../../utilities/handleErrors'

export const register :FetcherWithBody<Omit<IFormRegister, 'terms'| 'repeatPassword'>, {message:string}> = async (form) => {
  try {
    const { data } = await kunanpa.post('/signup', {
      ...form,
      dni: form.dni && parseInt(form.dni)
    }) as AxiosResponse<{message:string}>
    return data
  } catch (err) {
    console.log(err)
    throw handleErrorResponse(err)
  }
}
