import Layout from '@/components/layout'
import { getCategories } from '@/services/categories'
import { Category, Route } from '@/types/models'
import { GetStaticProps } from 'next'
type Props={
  categories:Category[]
}
export default function AllFlowers ({ categories }:Props) {
  const routes:Route[] = [{
    label: 'Inicio',
    path: '/'
  }, {
    label: 'Flores',
    path: '/flores'
  }]
  return (
        <Layout routes={routes} categories={categories} >
            <section>
                <h1>All Flowers</h1>
            </section>
        </Layout>
  )
}
export const getStaticProps:GetStaticProps = async (_ctx) => {
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
