import ProductDetailsSection from '@/components/common/ProductDetailsSection'
import Layout from '@/components/layout'
import { getCategories } from '@/services/categories'
import { getFlowerById, getFlowersId } from '@/services/flowers'
import { Category, FlowerDetails, Route } from '@/types/models'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
type Props={
  flower:FlowerDetails,
  categories:Category[]
}
export default function ProductDetails ({ flower, categories }:Props) {
  const route = useRouter()
  const routes:Route[] = [{
    label: 'Inicio',
    path: '/'
  }, {
    label: flower.nombre,
    path: route.pathname
  }]
  return (
        <Layout routes={routes} categories={categories} >
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
