import { EnlaceResponse } from '../responses'
import { Pedido } from './Pedido.model'

export interface OrderHistory {
    enlaces: EnlaceResponse[]
    pedidos: Pedido[]
    total: number
    quantity: number
}
