import Layout from '@/components/layout'
import { Category, Route } from '@/types/models'
import CardProfile from './components/CardProfile'
import { Profile as IProfile } from './types/models'

type Props = {
  categories: Category[]
}
const profile:IProfile = {
  _id: '2',
  address: 'Cercado de Lima',
  dni: '70481019',
  email: 'mjfura27@gmail.com',
  img: 'https://robohash.org/molestiasevenietnon.png?size=250x250&set=set4',
  name: 'Marco Fura'
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
      <section className='min-h-screen p-4 flex justify-center items-center' >
        <CardProfile profile={profile} />
      </section>
    </Layout>
  )
}
