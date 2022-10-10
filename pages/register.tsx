import { getCategories } from '@/services/categories'
import RegisterView from '@/views/register'
import { GetStaticProps } from 'next'
export default RegisterView
export const getStaticProps:GetStaticProps = async (_ctx) => {
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
