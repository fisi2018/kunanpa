import NavAspectList from '@/components/common/NavAspectList'
import Layout from '@/components/layout'
import type { Category, Route } from '@/types/models'
import { Typography } from '@material-tailwind/react'
type Props={
    categories:Category[]
}
export default function WishListView ({ categories }:Props) {
  const routes:Route[] = [{
    label: 'Inicio',
    path: '/'
  }, {
    label: 'Perfil',
    path: '/profile'
  }, {
    label: 'Lista de Deseos',
    path: '/profile/wish-list'
  }]
  return (
        <Layout categories={categories} routes={routes} >
            <section className='pt-6' >
                <div className='flex justify-between items-center ' >
                    <Typography variant="h2" >Lista de Deseos</Typography>
                    <NavAspectList total={5} />
                </div>
            </section>
        </Layout>
  )
}
