import { getCategories } from '@/services/categories'
import { Category, Route } from '@/types/models'
import { GetStaticProps } from 'next'
import FormRegister from '../components/common/FormRegister'
import Layout from '../components/layout'
type Props={
  categories:Category[]
}
const routes:Route[] = [{
  label: 'Inicio',
  path: '/'
}, {
  label: 'Registro',
  path: '/register'
}]
export default function Login ({ categories }:Props) {
  return (
        <Layout routes={routes} categories={categories} >
            <section className='p-4 flex flex-col items-center' >
                <FormRegister/>
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
