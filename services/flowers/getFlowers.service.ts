import { kunanpa } from '@/config'
import { FetcherWithoutBody } from '@/types/fetcher'
import { ResponseFlowers } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const getFlowers:FetcherWithoutBody<ResponseFlowers> = async () => {
  try {
    const { data } = await kunanpa.get<ResponseFlowers>('/flores')
    return data
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
