import Layout from '@/components/layout'
import { Category, Route } from '@/types/models'
import { FormLogin } from './components'
type Props = {
    categories: Category[]
}
const routes: Route[] = [{
  label: 'Inicio',
  path: '/'
}, {
  label: 'Login',
  path: '/login'
}]
export default function LoginView ({ categories }:Props) {
  return (
        <Layout routes={routes} categories={categories} >
            <section className='p-4 flex flex-col items-center' >
                <FormLogin />
            </section>
        </Layout>
  )
}
