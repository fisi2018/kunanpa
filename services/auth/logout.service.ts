import { kunanpa } from '@/config'
import { FetcherAuth } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const logout:FetcherAuth<{message:string}> = async (token) => {
  try {
    const { data } = await kunanpa.get<{message:string}>('/logout', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
