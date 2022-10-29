import { Category } from '@/types/models'
import { CategoryResponse } from '@/types/responses'

export const createCategoriesAdapter = (
    response: CategoryResponse
): Category[] => {
    return response.data.map(category => ({
        _id: category.id,
        name: category.nombre
    }))
}
