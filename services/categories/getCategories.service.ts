import { kunanpa } from '@/config'
import { Category } from '@/types/models'
import { FetcherWithoutBody } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/errors'
import { AxiosResponse } from 'axios'

export const getCategories:FetcherWithoutBody<{data:Category[]}> = async () => {
  try {
    const { data } = await kunanpa.get('/categoria') as AxiosResponse<{data:Category[]}>
    return data
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
