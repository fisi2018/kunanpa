import { getCategories } from '@/services/categories'
import LoginView from '@/views/login'
import { GetStaticProps } from 'next'

export default LoginView
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
