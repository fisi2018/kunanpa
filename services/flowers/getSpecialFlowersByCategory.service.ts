import { kunanpa } from '@/config'
import { FetcherWithBody } from '@/types/fetcher'
import { SpecialFlowersResponse } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { AxiosResponse } from 'axios'

export const getSpecialFlowersByCategory:FetcherWithBody<number, SpecialFlowersResponse> = async (id) => {
  try {
    const { data } = await kunanpa.get(`/flores/categoria-especial/${id}`) as AxiosResponse<SpecialFlowersResponse>
    return data
  } catch (e) {
    throw handleErrorResponse(e)
  }
}
