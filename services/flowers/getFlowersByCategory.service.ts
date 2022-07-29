import { kunanpa } from '@/config'
import { ResponseFlowers } from '@/types/data'
import { FetcherWithBody } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/errors'
import { AxiosResponse } from 'axios'

export const getFlowersByCategory:FetcherWithBody<string, ResponseFlowers> = async (idCategory) => {
  try {
    const { data } = await kunanpa.get(`/flores/categoria/${idCategory}`) as AxiosResponse<ResponseFlowers>
    return data
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
