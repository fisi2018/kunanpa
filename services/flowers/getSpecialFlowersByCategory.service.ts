import { kunanpa } from '@/config'
import { FetcherWithBody } from '@/types/fetcher'
import { SpecialFlowersResponse } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const getSpecialFlowersByCategory:FetcherWithBody<number, SpecialFlowersResponse> = async (id) => {
  try {
    const { data } = await kunanpa.get<SpecialFlowersResponse>(`/flores/categoria-especial/${id}`)
    return data
  } catch (e) {
    throw handleErrorResponse(e)
  }
}
