import { kunanpa } from '@/config'
import { FetcherAuthWithBody } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const deleteProductFromWishList:FetcherAuthWithBody<string, {message:string}> = async (idFlor, token) => {
  try {
    const { data } = await kunanpa.delete<{message:string}>(`/wish-list/${idFlor}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (e) {
    throw handleErrorResponse(e)
  }
}
