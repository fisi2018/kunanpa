import { kunanpa } from '@/config'
import { FetcherAuth } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { WishListResponse } from '../types/responses'

export const getWishList:FetcherAuth<WishListResponse> = async (token) => {
  try {
    const { data } = await kunanpa.get<WishListResponse>('/wish-list', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (e) {
    throw handleErrorResponse(e)
  }
}
