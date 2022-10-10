import { createFlowersAdapter } from '@/adapters/flowers'
import { kunanpa } from '@/config'
import { FetcherWithBody } from '@/types/fetcher'
import { DataFlower } from '@/types/models'
import { ResponseFlowers } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const getFlowersByPage:FetcherWithBody<string, DataFlower> = async (page) => {
  try {
    const { data } = await kunanpa.get<ResponseFlowers>(`/${page}`)
    return createFlowersAdapter(data)
  } catch (err) {
    throw handleErrorResponse(err)
  }
}
