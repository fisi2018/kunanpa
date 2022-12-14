import { createCategoriesAdapter } from '@/adapters/categories'
import { kunanpa } from '@/config'
import { FetcherWithoutBody } from '@/types/fetcher'
import { Category } from '@/types/models'
import { CategoryResponse } from '@/types/responses'
import { handleErrorResponse } from '@/utilities/handleErrors'

export const getCategories: FetcherWithoutBody<Category[]> = async () => {
    try {
        const { data } = await kunanpa.get<CategoryResponse>('/categoria')
        console.log('categories', data)
        return createCategoriesAdapter(data)
    } catch (err) {
        console.log('error en get categories', err)
        throw handleErrorResponse(err)
    }
}
