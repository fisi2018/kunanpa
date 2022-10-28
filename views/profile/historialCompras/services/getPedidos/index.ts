import { kunanpaV2 } from '@/config'
import { FetcherAuthWithBody } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { OrderHistoryRequest } from '../../types/requests'
import { OrderHistoryResponse } from '../../types/responses'

export const getPedidos: FetcherAuthWithBody<
    OrderHistoryRequest,
    OrderHistoryResponse
> = async ({ idUsuario, page }, token) => {
    try {
        const { data } = await kunanpaV2.get<OrderHistoryResponse>(
            `/pedido/${idUsuario}` + (page !== 1 ? `?page=${page}` : ''),
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
