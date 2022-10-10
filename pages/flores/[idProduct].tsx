import { getCategories } from '@/services/categories'
import { getFlowerById, getFlowersId } from '@/services/flowers'
import ProductDetailsView from '@/views/productDetails'
import { GetStaticPaths, GetStaticProps } from 'next'
export default ProductDetailsView
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const ids = await getFlowersId()
    const paths = ids.map(id => ({ params: { idProduct: id } }))
    return {
      paths,
      fallback: 'blocking'
    }
  } catch (e) {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
}

export const getStaticProps:GetStaticProps = async (ctx) => {
  try {
    const { idProduct } = ctx.params as { idProduct: string }
    const [categories, response] = await Promise.all([getCategories(), getFlowerById(idProduct)])
    return {
      props: {
        flower: response,
        categories
      },
      revalidate: 10
    }
  } catch (e) {
    const error = e as Error
    return {
      props: {
        error: error.message
      },
      revalidate: 10
    }
  }
}
