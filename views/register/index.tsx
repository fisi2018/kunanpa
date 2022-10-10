import FormRegister from '@/views/register/components/FormRegister'
import Layout from '@/components/layout'
import { Category, Route } from '@/types/models'

type Props = {
    categories: Category[]
}
const routes: Route[] = [{
  label: 'Inicio',
  path: '/'
}, {
  label: 'Registro',
  path: '/register'
}]
export default function RegisterView ({ categories }:Props) {
  return (
        <Layout routes={routes} categories={categories} >
            <section className='p-4 flex flex-col items-center' >
                <FormRegister />
            </section>
        </Layout>
  )
}
