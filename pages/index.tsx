import { getCategories } from '@/services/categories'
import { getSpecialFlowersByCategory } from '@/services/flowers'
import HomeView from '@/views/home'
import { GetStaticProps } from 'next'
export default HomeView
export const getStaticProps:GetStaticProps = async (_ctx) => {
  try {
    const [categories, masVendidos, exclusivos, classics] = await Promise.all([getCategories(), getSpecialFlowersByCategory(1), getSpecialFlowersByCategory(2), getSpecialFlowersByCategory(3)])

    return {
      props: {
        categories,
        masVendidos,
        classics,
        exclusivos
      },
      revalidate: 10
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
