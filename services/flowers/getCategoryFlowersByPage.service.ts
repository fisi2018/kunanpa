import { createFlowersAdapter } from '@/adapters/flowers'
import { kunanpa } from '@/config'
import { FetcherWithBody } from '@/types/fetcher'
import { DataFlower } from '@/types/models'
import { ResponseFlowers } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const getCategoryFlowersByPage: FetcherWithBody<
    string,
    DataFlower
> = async route => {
    try {
        console.log('route in categoryFlowers by page', route)
        const { data } = await kunanpa.get<ResponseFlowers>(
            `/flores/categoria/${route}`
        )
        console.log('categoryFlowers by page', data)
        return createFlowersAdapter(data)
    } catch (err) {
        console.log('error en get category flowers by page', err)
        throw handleErrorResponse(err)
    }
}
