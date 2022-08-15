import ProductDetailsSection from '@/components/common/ProductDetailsSection'
import Layout from '@/components/layout'
import { getFlowerById, getFlowersId } from '@/services/flowers'
import { FlowerDetails } from '@/types/models'
import { GetStaticPaths, GetStaticProps } from 'next'
type Props={
  flower:FlowerDetails
}
export default function ProductDetails ({ flower }:Props) {
  return (
        <Layout>
            <ProductDetailsSection flower={flower} />
        </Layout>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const ids = await getFlowersId()
    const paths = ids.map(id => ({ params: { idProduct: id } }))
    return {
      paths,
      fallback: false
    }
  } catch (e) {
    return {
      paths: [],
      fallback: false
    }
  }
}

export const getStaticProps:GetStaticProps = async (ctx) => {
  try {
    const { idProduct } = ctx.params as { idProduct: string }
    const response = await getFlowerById(idProduct)
    return {
      props: {
        flower: response
      },
      revalidate: 10
    }
  } catch (e) {
    const error = e as Error
    return {
      props: {
        error: error.message
      }
    }
  }
}
