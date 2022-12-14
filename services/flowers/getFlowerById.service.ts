import { createFlowerDetailsAdapter } from '@/adapters/flowers/flowerDetails.adapter'
import { kunanpa } from '@/config'
import { FetcherWithBody } from '@/types/fetcher'
import { FlowerDetails } from '@/types/models'
import { FlowerDetailsResponse } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const getFlowerById: FetcherWithBody<
    string,
    FlowerDetails
> = async idProduct => {
    try {
        console.log('idProduct', idProduct)
        const { data } = await kunanpa.get<FlowerDetailsResponse>(
            `/flores/${idProduct}`
        )
        console.log('get flowers by id', data)
        return createFlowerDetailsAdapter(data)
    } catch (e) {
        console.log('error en get flowers by id', e)
        throw handleErrorResponse(e)
    }
}
