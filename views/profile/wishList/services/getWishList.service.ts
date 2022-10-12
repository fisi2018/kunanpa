import { kunanpa } from '@/config'
import { FetcherAuth } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { WishListItemResponse } from '../types/responses'

export const getWishList:FetcherAuth<WishListItemResponse[]> = async (token) => {
  try {
    const { data } = await kunanpa.get<WishListItemResponse[]>('/wish-list', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (e) {
    throw handleErrorResponse(e)
  }
}
