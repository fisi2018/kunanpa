import { kunanpa } from '@/config'
import { FetcherAuth } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { AxiosResponse } from 'axios'

export const logout:FetcherAuth<{message:string}> = async (token) => {
  try {
    const { data } = await kunanpa.get('/logout', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<{message:string}>
    return data
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
