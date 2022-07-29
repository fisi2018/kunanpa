import { kunanpa } from '@/config'
import { ResponseFlowers } from '@/types/data'
import { FetcherWithBody } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/errors'
import { AxiosResponse } from 'axios'

export const getFlowersPage:FetcherWithBody<string, ResponseFlowers> = async (route) => {
  try {
    const { data } = await kunanpa.get(`/${route}`) as AxiosResponse<ResponseFlowers>
    return data
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
