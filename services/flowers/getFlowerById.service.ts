import { createFlowerDetailsAdapter } from '@/adapters/flowers/flowerDetails.adapter'
import { kunanpa } from '@/config'
import { FetcherWithBody } from '@/types/fetcher'
import { FlowerDetails } from '@/types/models'
import { FlowerDetailsResponse } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const getFlowerById:FetcherWithBody<string, FlowerDetails> = async (idProduct) => {
  try {
    const { data } = await kunanpa.get<FlowerDetailsResponse>(`/flores/${idProduct}`)
    return createFlowerDetailsAdapter(data)
  } catch (e) {
    throw handleErrorResponse(e)
  }
}
