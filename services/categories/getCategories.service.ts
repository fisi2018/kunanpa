import { kunanpa } from '@/config'
import { Category } from '@/types/models'
import { FetcherWithoutBody } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { CategoryResponse } from '@/types/responses'
import { createCategoriesAdapter } from '@/adapters/categories'

export const getCategories:FetcherWithoutBody<Category[]> = async () => {
  try {
    const { data } = await kunanpa.get<CategoryResponse>('/categoria')
    return createCategoriesAdapter(data)
  } catch (err) {
    console.log(err)
    throw handleErrorResponse(err)
  }
}
