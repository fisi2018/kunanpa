import { EnlaceResponse } from '../../types/responses'

export const ENLACES_MOCK: EnlaceResponse[] = [
    {
        url: 'http://localhost:3000/profile/historial-compras/1?page=1',
        label: '1',
        active: true
    },
    {
        url: 'http://localhost:3000/profile/historial-compras/1?page=2',
        label: '2',
        active: false
    },
    {
        url: 'http://localhost:3000/profile/historial-compras/1?page=3',
        label: '3',
        active: false
    },
    {
        url: 'http://localhost:3000/profile/historial-compras/1?page=2',
        label: '4',
        active: false
    }
]
