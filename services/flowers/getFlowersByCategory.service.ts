import { createFlowersAdapter } from '@/adapters/flowers'
import { kunanpa } from '@/config'
import { FetcherWithBody } from '@/types/fetcher'
import { DataFlower } from '@/types/models'
import { ResponseFlowers } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const getFlowersByCategory: FetcherWithBody<
    string,
    DataFlower
> = async idCategory => {
    try {
        console.log('idCategory', idCategory)
        const { data } = await kunanpa.get<ResponseFlowers>(
            `/flores/categoria/${idCategory}`
        )
        console.log('flowers by category', data)
        return createFlowersAdapter(data)
    } catch (err) {
        console.log('error en get flowers by category', err)
        throw handleErrorResponse(err)
    }
}
