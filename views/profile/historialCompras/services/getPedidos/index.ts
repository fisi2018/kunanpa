import { kunanpaV2 } from '@/config'
import { FetcherAuthWithBody } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { OrderHistoryResponse } from '../../types/responses'

export const getPedidos: FetcherAuthWithBody<
    string,
    OrderHistoryResponse
> = async (id, token) => {
    try {
        const { data } = await kunanpaV2.get<OrderHistoryResponse>(
            `/pedido/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return data
    } catch (e) {
        throw handleErrorResponse(e)
    }
}
