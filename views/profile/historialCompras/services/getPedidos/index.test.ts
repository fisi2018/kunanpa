import { kunanpaV2 } from '@/config'
import { getPedidos } from '.'
import { RESPONSE_MOCK } from './index.mock'
jest.mock('@/config')
describe('getAllOrders service', () => {
    it('should return an OrderHistoryResponse object when service is success', async () => {
        const kunanpaMocked = kunanpaV2 as jest.Mocked<typeof kunanpaV2>
        kunanpaMocked.get.mockResolvedValue({
            data: RESPONSE_MOCK
        })
        const data = await getPedidos(
            {
                idUsuario: '1',
                page: 1
            },
            'access token'
        )
        expect(data).toEqual(RESPONSE_MOCK)
    })
})
