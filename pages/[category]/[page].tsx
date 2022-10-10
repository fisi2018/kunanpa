import { getCategories } from '@/services/categories'
import { getCategoryFlowersByPage } from '@/services/flowers'
import { GetServerSideProps } from 'next'
import { createTitleAdapter } from '../../adapters'
import ProductsByPageView from '@/views/productsByCategory/productsByPage'
export default ProductsByPageView
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const { page, category } = ctx.params as {category:string, page:string}
    const [categories, data] = await Promise.all([getCategories(), getCategoryFlowersByPage(page)])
    return {
      props: {
        categories,
        data,
        category: createTitleAdapter(category),
        id: category.split('-').pop()
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      }
    }
  }
}
