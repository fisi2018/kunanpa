import { OrderHistory } from '../types/models'
import { OrderHistoryResponse } from '../types/responses'
import { createPedidoAdapter } from './pedido.adapter'

export const createOrderHistoryAdapter = (
    response: OrderHistoryResponse
): OrderHistory => {
    return {
        enlaces: response.links,
        pedidos: response.data.map(createPedidoAdapter),
        total: response.total,
        quantity: response.per_page
    }
}
