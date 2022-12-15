import Layout from '@/components/layout'
import { getCategories } from '@/services/categories'
import { Route } from '@/types/models'
import { Alert } from '@material-tailwind/react'
import useSWR from 'swr'
import { createProfileAdapter } from './adapters'
import { CardProfile } from './components'
import { UserResponse } from './types/responses'

type Props = {
    userById: UserResponse
}
/* const profile:IProfile = {
  _id: '2',
  address: 'Cercado de Lima',
  dni: '70481019',
  email: 'mjfura27@gmail.com',
  img: 'https://robohash.org/molestiasevenietnon.png?size=250x250&set=set4',
  name: 'Marco Fura'
} */
export default function Profile({ userById }: Props) {
    const routes: Route[] = [
        {
            label: 'Inicio',
            path: '/'
        },
        {
            label: 'Perfil',
            path: '/profile'
        }
    ]
    const fetcher = async () => {
        try {
            const data = await getCategories()
            return data
        } catch (e) {
            const error = e as Error
            throw Error(error.message)
        }
    }
    const {
        data: categories,
        error,
        isValidating
    } = useSWR('/categories', fetcher)
    return (
        <Layout
            categories={categories || []}
            isValidating={isValidating}
            routes={routes}
        >
            {error && <Alert color="red">{error.message}</Alert>}
            <section className="min-h-screen p-4 flex justify-center items-center">
                {<CardProfile profile={createProfileAdapter(userById)} />}
            </section>
        </Layout>
    )
}
