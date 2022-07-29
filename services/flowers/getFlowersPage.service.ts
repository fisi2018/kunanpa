import { kunanpa } from '@/config'
import { ResponseFlowers } from '@/types/models'
import { FetcherWithBody } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { AxiosResponse } from 'axios'

export const getFlowersPage:FetcherWithBody<string, ResponseFlowers> = async (route) => {
  try {
    const { data } = await kunanpa.get(`/flores/categoria/${route}`) as AxiosResponse<ResponseFlowers>
    return data
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
