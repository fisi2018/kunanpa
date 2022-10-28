import { Pedido } from '../types/models'
import { PedidoResponse } from '../types/responses'

export const createPedidoAdapter = (response: PedidoResponse): Pedido => {
    return {
        _id: response.idPedido,
        pedido: response.pedido,
        fechaCompra: response.fechaCompra,
        costo: response.total,
        estado: response.estado
    }
}
