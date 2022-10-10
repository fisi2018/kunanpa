import ProductDetailsSection from '@/views/productDetails/components/ProductDetailsSection'
import Layout from '@/components/layout'
import { Category, FlowerDetails, Route } from '@/types/models'
import { useRouter } from 'next/router'

type Props = {
    flower: FlowerDetails,
    categories: Category[]
}
export default function ProductDetailsView ({ categories, flower }:Props) {
  const route = useRouter()
  const routes: Route[] = [{
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
