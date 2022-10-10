import { kunanpa } from '../../../config'
import { FetcherWithBody } from '../../../types/fetcher'
import { handleErrorResponse } from '../../../utilities/handleErrors'
import { RegisterRequest } from '../types/requests/Register.request'
import { RegisterResponse } from '../types/responses'

export const register :FetcherWithBody<RegisterRequest, RegisterResponse> = async (form) => {
  try {
    const { data } = await kunanpa.post<RegisterResponse>('/signup', {
      ...form,
      dni: form.dni && parseInt(form.dni)
    })
    return data
  } catch (err) {
    console.log(err)
    throw handleErrorResponse(err)
  }
}
