import { kunanpa } from '@/config'
import { FetcherWithoutBody } from '@/types/fetcher'
import { ResponseFlowers } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { AxiosResponse } from 'axios'

export const getFlowers:FetcherWithoutBody<ResponseFlowers> = async () => {
  try {
    const { data } = await kunanpa.get('/flores') as AxiosResponse<ResponseFlowers>
    return data
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
