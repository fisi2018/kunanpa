import { createFlowersAdapter } from '@/adapters/flowers'
import { kunanpa } from '@/config'
import { FetcherWithBody } from '@/types/fetcher'
import { DataFlower } from '@/types/models'
import { ResponseFlowers } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const getFlowersByPage: FetcherWithBody<
    string,
    DataFlower
> = async page => {
    try {
        console.log('page', page)
        const { data } = await kunanpa.get<ResponseFlowers>(`/${page}`)
        console.log('flowers by page', data)
        return createFlowersAdapter(data)
    } catch (err) {
        console.log('error en get flowers by page', err)
        throw handleErrorResponse(err)
    }
}
