import { OrderHistoryResponse } from '../../types/responses'

export const RESPONSE_MOCK: OrderHistoryResponse = {
    total: 1,
    per_page: 1,
    data: [
        {
            idPedido: '1',
            pedido: '1',
            fechaCompra: '2021-05-01',
            total: 100,
            estado: 'Pendiente'
        }
    ],
    links: [
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=1',
            label: '&laquo; Anterior',
            active: false
        },
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
        },
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=7',
            label: '7',
            active: false
        },
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=8',
            label: '8',
            active: false
        },
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=9',
            label: '9',
            active: false
        },
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=10',
            label: '10',
            active: false
        },
        {
            url: 'http://localhost:3000/api/v2/pedidos?page=2',
            label: 'Siguiente &raquo;',
            active: false
        }
    ]
}
