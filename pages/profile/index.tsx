import Layout from '@/components/layout'
import { getCategories } from '@/services/categories'
import { Category, Route } from '@/types/models'
import { GetStaticProps } from 'next'
type Props = {
    categories: Category[]
}
export default function Profile ({ categories }: Props) {
  const routes: Route[] = [{
    label: 'Inicio',
    path: '/'
  }, {
    label: 'Perfil',
    path: '/profile'
  }]
  return (
        <Layout categories={categories} routes={routes} >
            <h1>Mi cuenta</h1>
        </Layout>
  )
}
export const getStaticProps: GetStaticProps = async (_ctx) => {
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
