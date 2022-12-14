import { kunanpa } from '@/config'
import { FetcherWithoutBody } from '@/types/fetcher'
import { ResponseFlowers } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const getFlowers: FetcherWithoutBody<ResponseFlowers> = async () => {
    try {
        const { data } = await kunanpa.get<ResponseFlowers>('/flores')
        console.log('flowers', data)
        return data
    } catch (err) {
        console.log('error en get flowers', err)
        throw handleErrorResponse(err)
    }
}
