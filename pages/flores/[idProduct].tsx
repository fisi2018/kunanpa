import { getCategories } from '@/services/categories'
import { getFlowerById, getFlowersId } from '@/services/flowers'
import { Category, FlowerDetails } from '@/types/models'
import ProductDetailsView from '@/views/productDetails'
import { GetStaticPaths, GetStaticProps } from 'next'
type Props={
  flower:FlowerDetails,
  categories:Category[]
}
export default function ProductDetails ({ flower, categories }:Props) {
  return (
        <ProductDetailsView categories={categories} flower={flower} />
  )
}
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
