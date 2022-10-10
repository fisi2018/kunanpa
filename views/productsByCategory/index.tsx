import ListProducts from '@/views/productsByCategory/components/ListProducts'
import Layout from '@/components/layout'
import { Category, DataFlower, Route } from '@/types/models'
import { useRouter } from 'next/router'

type Props = {
    data: DataFlower,
    category: string,
    categories: Category[],
    id: string
}
export default function ProductsByCategoryView ({ categories, category, data, id }:Props) {
  const route = useRouter()
  const routes: Route[] = [{
    label: 'Inicio',
    path: '/'
  }, {
    label: category,
    path: route.pathname
  }]
  return (
        <Layout routes={routes} categories={categories} >
            <section>
                <ListProducts id={id} category={category} pages={data.pages} total={data.total} flowers={data.flowers} />
            </section>
        </Layout>
  )
}
