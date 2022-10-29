import { ResponseFlowers } from '@/types/responses'

export const createFlowersIdsAdapter = (data: ResponseFlowers): string[] => {
    return data.data.map(flower => flower.id.toString())
}
