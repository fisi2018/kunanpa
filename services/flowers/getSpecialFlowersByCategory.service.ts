import { kunanpa } from '@/config'
import { FetcherWithBody } from '@/types/fetcher'
import { SpecialFlowersResponse } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const getSpecialFlowersByCategory: FetcherWithBody<
    number,
    SpecialFlowersResponse
> = async id => {
    try {
        console.log('idCategory', id)
        const { data } = await kunanpa.get<SpecialFlowersResponse>(
            `/flores/categoria-especial/${id}`
        )
        console.log('flowers by special category', data)
        return data
    } catch (e) {
        console.log('error en get flowers by special category', e)
        throw handleErrorResponse(e)
    }
}
