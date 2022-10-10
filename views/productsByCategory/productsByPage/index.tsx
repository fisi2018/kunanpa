import Layout from '@/components/layout'
import { Category, DataFlower, Route } from '@/types/models'
import { useRouter } from 'next/router'
import { ListProducts } from '../components'

type Props = {
    data: DataFlower,
    category: string,
    categories: Category[],
    id: string
}
export default function ProductsByPageView ({ categories, category, data, id }:Props) {
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
                <ListProducts pages={data.pages} total={data.total} category={category} id={id} flowers={data.flowers} />
            </section>
        </Layout>
  )
}
