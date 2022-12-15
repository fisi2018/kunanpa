import Layout from '@/components/layout'
import { getCategories } from '@/services/categories'
import { Route } from '@/types/models'
import { Alert } from '@material-tailwind/react'
import useSWR from 'swr'
import { FormLogin } from './components'

const routes: Route[] = [
    {
        label: 'Inicio',
        path: '/'
    },
    {
        label: 'Login',
        path: '/login'
    }
]
export default function LoginView() {
    const fetcher = async () => {
        try {
            const data = await getCategories()
            return data
        } catch (e) {
            const error = e as Error
            throw Error(error.message)
        }
    }
    const { data, error, isValidating } = useSWR('/categories', fetcher)
    return (
        <Layout
            categories={data || []}
            isValidating={isValidating}
            routes={routes}
        >
            {error && <Alert color="red">{error.message}</Alert>}
            <section className="p-4 flex flex-col items-center">
                <FormLogin />
            </section>
        </Layout>
    )
}
