import { EnlaceResponse } from './Enlace.response'
import { PedidoResponse } from './Pedido.response'

export interface OrderHistoryResponse {
    total: number
    per_page: number
    data: PedidoResponse[]
    links: EnlaceResponse[]
}
