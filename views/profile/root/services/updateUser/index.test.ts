import { kunanpaV2 } from '@/config'
import { updateUser } from '.'
import { REQUEST_MOCK, RESPONSE_MOCK } from './index.mock'
jest.mock('@/config')
describe('Update Service', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should return UpdateUserResponse object when service is success', async () => {
        const kunanpaMocked = kunanpaV2 as jest.Mocked<typeof kunanpaV2>
        kunanpaMocked.put.mockResolvedValue({
            data: RESPONSE_MOCK
        })
        const data = await updateUser(REQUEST_MOCK, 'access token')
        expect(data).toEqual(RESPONSE_MOCK)
    })
    it('should throw an error when service fails', async () => {
        const kunanpaMocked = kunanpaV2 as jest.Mocked<typeof kunanpaV2>
        kunanpaMocked.put.mockRejectedValue(new Error('Error'))
        await expect(updateUser(REQUEST_MOCK, 'access token')).rejects.toThrow()
    })
})
