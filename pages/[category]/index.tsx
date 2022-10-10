import { getCategories } from '@/services/categories'
import { getFlowersByCategory } from '@/services/flowers'
import ProductsByCategoryView from '@/views/productsByCategory'
import { GetStaticPaths, GetStaticProps } from 'next'
import { createTitleAdapter } from '../../adapters'

export default ProductsByCategoryView
export const getStaticPaths:GetStaticPaths = async () => {
  const categories = await getCategories()
  const paths = categories.map((category) => ({
    params: {
      category: category.name.toLowerCase().replaceAll(' ', '-') + '-' + category._id
    }
  }))
  return {
    paths,
    fallback: 'blocking'
  }
}
export const getStaticProps:GetStaticProps = async (ctx) => {
  try {
    const { category } = ctx.params as {category:string}
    const [categories, data] = await Promise.all([getCategories(), getFlowersByCategory(category.split('-').pop() as string)])
    return {
      props: {
        category: createTitleAdapter(category),
        categories,
        data,
        id: category.split('-').pop()
      },
      revalidate: 10
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      },
      revalidate: 10
    }
  }
}
