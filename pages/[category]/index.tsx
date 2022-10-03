import { getCategories } from '@/services/categories'
import { getFlowersByCategory } from '@/services/flowers'
import { Category, DataFlower, Route } from '@/types/models'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { createTitleAdapter } from '../../adapters'
import ListProducts from '../../components/common/ListProducts'
import Layout from '../../components/layout'
type Props={
    data:DataFlower,
    category:string,
    categories:Category[],
    id:string
}
export default function CategoryProducts ({ data, category, id, categories }:Props) {
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
                <ListProducts id={id} category={category} pages={data.pages} total={data.total} flowers={data.flowers} />
            </section>
        </Layout>
  )
}
export const getStaticPaths:GetStaticPaths = async () => {
  const categories = await getCategories()
  const paths = categories.map((category) => ({
    params: {
      category: category.name.toLowerCase().replaceAll(' ', '-') + '-' + category._id
    }
  }))
  return {
    paths,
    fallback: 'blocking'
  }
}
export const getStaticProps:GetStaticProps = async (ctx) => {
  try {
    const { category } = ctx.params as {category:string}
    const [categories, data] = await Promise.all([getCategories(), getFlowersByCategory(category.split('-').pop() as string)])
    return {
      props: {
        category: createTitleAdapter(category),
        categories,
        data,
        id: category.split('-').pop()
      },
      revalidate: 10
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      },
      revalidate: 10
    }
  }
}
