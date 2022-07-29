import { kunanpa } from '@/config'
import { ResponseFlowers } from '@/types/data'
import { FetcherWithoutBody } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/errors'
import { AxiosResponse } from 'axios'

export const getFlowers:FetcherWithoutBody<ResponseFlowers> = async () => {
  try {
    const { data } = await kunanpa.get('/flores') as AxiosResponse<ResponseFlowers>
    return data
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
