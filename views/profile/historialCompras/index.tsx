import Layout from '@/components/layout'
import { Category, Route } from '@/types/models'
import { Typography } from '@material-tailwind/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { createOrderHistoryAdapter } from './adapters'
import { Table } from './components'
import { getPedidos } from './services'
type Props = {
    categories: Category[]
}
export default function HistorialCompras({ categories }: Props) {
    const { data: session, status } = useSession()
    const { push } = useRouter()
    if (!session && status === 'unauthenticated') push('/login')
    const fetcher = async () => {
        try {
            if (!session) throw new Error('Debe iniciar sesión para continuar')
            const response = await getPedidos(
                session.user.id.toString(),
                session.accessToken
            )
            return response
        } catch (e) {
            const error = e as Error
            throw new Error(error.message)
        }
    }
    const { data } = useSWR('/api/pedidos', fetcher)
    const routes: Route[] = [
        {
            label: 'Inicio',
            path: '/'
        },
        {
            label: 'Perfil',
            path: '/profile'
        },
        {
            label: 'Historial de Compras',
            path: '/profile/historial-compras'
        }
    ]
    return (
        <Layout
            categories={categories}
            routes={routes}
        >
            <section className="min-h-screen p-4 flex flex-col  ">
                <Typography
                    color="blue-gray"
                    variant="h1"
                    textGradient
                >
                    Historial de compras
                </Typography>
                <div className="flex justify-center align-items-center">
                    <Table
                        compras={
                            !data ? [] : createOrderHistoryAdapter(data).pedidos
                        }
                    />
                    <p>Total: {data ? data.total : 0}</p>
                </div>
            </section>
        </Layout>
    )
}
