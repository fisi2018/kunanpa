import { getCategories } from '@/services/categories'
import WishListView from '@/views/profile/wishList'
import { GetStaticProps } from 'next'
export default WishListView
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
