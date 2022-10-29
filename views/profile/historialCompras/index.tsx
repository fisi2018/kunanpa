import Layout from '@/components/layout'
import { Category, Route } from '@/types/models'
import { Typography } from '@material-tailwind/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import { createOrderHistoryAdapter } from './adapters'
import { Table } from './components'
import Pagination from './components/Pagination'
import { getPedidos } from './services'
type Props = {
    categories: Category[]
}
export default function HistorialCompras({ categories }: Props) {
    const [page, setPage] = useState(1)
    const { data: session, status } = useSession()
    const { push } = useRouter()
    if (!session && status === 'unauthenticated') push('/login')
    const fetcher = async () => {
        try {
            if (!session) throw new Error('Debe iniciar sesión para continuar')
            const response = await getPedidos(
                {
                    idUsuario: session.user.id.toString(),
                    page
                },
                session.accessToken
            )
            return createOrderHistoryAdapter(response)
        } catch (e) {
            console.log('error en el fetcher', e)
            const error = e as Error
            throw new Error(error.message)
        }
    }
    const { data } = useSWR('/api/pedidos/id', fetcher)
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
                <div className="grid grid-cols-1 gap-4">
                    <Typography
                        className="text-gray-500"
                        variant="paragraph"
                    >
                        Total: {data?.total || 0} pedidos
                    </Typography>
                    <Table compras={!data ? [] : data.pedidos} />
                    <Pagination
                        enlaces={data ? data.enlaces : []}
                        setPage={setPage}
                    />
                </div>
            </section>
        </Layout>
    )
}
