import Layout from '@/components/layout'
import { Category, Route } from '@/types/models'
import { Typography } from '@material-tailwind/react'
import { Table } from './components'
import { PEDIDOS_MOCK } from './components/Table/index.mock'
type Props = {
    categories: Category[]
}
export default function HistorialCompras({ categories }: Props) {
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
                    <Table compras={PEDIDOS_MOCK} />
                </div>
            </section>
        </Layout>
    )
}
