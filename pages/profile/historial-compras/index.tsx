import { getCategories } from '@/services/categories'
import HistorialCompras from '@/views/profile/historialCompras'
import { GetStaticProps } from 'next'
export default HistorialCompras
export const getStaticProps: GetStaticProps = async (_ctx) => {
  try {
    const categories = await getCategories()
    return {
      props: {
        categories
      }
    }
  } catch (e) {
    const error = e as Error
    return {
      props: {
        message: error.message
      }
    }
  }
}
