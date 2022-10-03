import { getCategories } from '@/services/categories'
import { getCategoryFlowersByPage } from '@/services/flowers'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { createTitleAdapter } from '../../adapters'
import ListProducts from '../../components/common/ListProducts'
import Layout from '../../components/layout'
import { Category, DataFlower, Route } from '../../types/models'
type Props={
    data:DataFlower,
    category:string,
    categories:Category[],
    id:string
}
export default function CategoryProductsByPage ({ category, id, data, categories }:Props) {
  const route = useRouter()
  const routes:Route[] = [{
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
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const { page, category } = ctx.params as {category:string, page:string}
    const [categories, data] = await Promise.all([getCategories(), getCategoryFlowersByPage(page)])
    return {
      props: {
        categories,
        data,
        category: createTitleAdapter(category),
        id: category.split('-').pop()
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      }
    }
  }
}
