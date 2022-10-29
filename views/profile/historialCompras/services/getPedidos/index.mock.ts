import { OrderHistoryResponse } from '../../types/responses'

export const RESPONSE_MOCK: OrderHistoryResponse = {
    total: 15,
    per_page: 3,
    data: [
        {
            idPedido: '1',
            pedido: '1',
            fechaCompra: '2021-05-01',
            total: 100,
            estado: 'Pendiente'
        },
        {
            idPedido: '2',
            pedido: '2',
            fechaCompra: '2021-05-02',
            total: 200,
            estado: 'Pendiente'
        },
        {
            idPedido: '3',
            pedido: '3',
            fechaCompra: '2021-05-03',
            total: 300,
            estado: 'Pendiente'
        }
    ],
    links: [
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=1',
            label: '1',
            active: true
        },
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=2',
            label: '2',
            active: false
        },
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=3',
            label: '3',
            active: false
        },
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=4',
            label: '4',
            active: false
        },
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=5',
            label: '5',
            active: false
        },
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=6',
            label: '6',
            active: false
        }
    ]
}
