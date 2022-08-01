import { createFlowerDetailsAdapter } from '@/adapters/flowers/flowerDetails.adapter'
import { kunanpa } from '@/config'
import { FetcherWithBody } from '@/types/fetcher'
import { FlowerDetails } from '@/types/models'
import { FlowerDetailsResponse } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { AxiosResponse } from 'axios'

export const getFlowerById:FetcherWithBody<string, FlowerDetails> = async (idProduct) => {
  try {
    const { data } = await kunanpa.get(`/flores/${idProduct}`) as AxiosResponse<FlowerDetailsResponse>
    return createFlowerDetailsAdapter(data)
  } catch (e) {
    throw handleErrorResponse(e)
  }
}
