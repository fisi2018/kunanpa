import NavAspectList from '@/components/common/NavAspectList'
import Layout from '@/components/layout'
import type { Category, Route } from '@/types/models'
import { Typography } from '@material-tailwind/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { createWishListAdapter } from './adapters'
import { CardProduct } from './components'
import { getWishList } from './services'
type Props={
    categories:Category[]
}
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
export default function WishListView ({ categories }:Props) {
  const { data: session, status } = useSession()
  const { push } = useRouter()
  if (status === 'unauthenticated') push('/')
  const fetcher = async () => {
    try {
      if (!session) throw new Error('Debe iniciar sesión para acceder a esta funcionalidad')
      const response = await getWishList(session.accessToken)
      const data = createWishListAdapter(response)
      return data
    } catch (e) {
      const error = e as Error
      throw new Error(error.message)
    }
  }
  const { data, mutate, isValidating } = useSWR('/wish-list', fetcher)
  return (
        <Layout categories={categories} routes={routes} >
            <section className='pt-6' >
                <div className='flex justify-between items-center ' >
                    <Typography variant="h2" >Lista de Deseos</Typography>
                    <NavAspectList total={data ? data.length : 0} />
                </div>
        <div className={`p-4 grid grid-cols-1 place-items-center gap-4 ${isValidating ? ' animate-pulse  ' : ''}`} >
                {
                    (data || []).map((item) => (
                        <CardProduct mutate={mutate} key={item._id} item={item} />
                    ))

                }
                </div>
            </section>
        </Layout>
  )
}
